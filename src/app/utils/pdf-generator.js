/*!
 * EnduranceTrio Web Components
 * Copyright Ricardo do Canto
 * Licensed under MIT (https://github.com/EnduranceCode/endurancetrio-race-results/blob/master/LICENSE)
 */

import { jsPDF } from 'jspdf';
import { uiMessagesKeys, getUiMessage } from '../i18n/ui-messages';

import 'jspdf-autotable';

/**
 * Generate a PDF file with the given race live results
 * @param race the given race
 */
export function generateLiveResultsPDF(race) {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
  });

  const results = race.results.get('overall');
  const resultsColumns = Object.keys(results[0]);
  resultsColumns.forEach((column, index) => {
    resultsColumns[index] = getUiMessage(column);
  });
  const rows = results.map((row) => Object.values(row));

  const headerLabel = getUiMessage(uiMessagesKeys.generatedLabel).concat('\xa0', formatDate(new Date()));

  const fileName = race.raceReference ? createFileName(race.raceReference) : 'results.pdf';

  pdf.autoTable({
    head: [resultsColumns],
    body: rows,
    didDrawPage: function (data) {
      pdf.setFontSize(12);
      pdf.text(headerLabel, data.settings.margin.left, 15);
    },
    margin: { top: 20 },
  });

  pdf.save(fileName);
}

/**
 * Formats the the given date as a YYYY-MM-DD hh:mm:ss string
 *
 * @param date the given date to be formatted
 * @returns the given date as a YYYY-MM-DD hh:mm:ss string
 */
function formatDate(date) {
  return (
    [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-') +
    ' ' +
    [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds())].join(':')
  );
}

/**
 * Pads the given number with a two digits format
 *
 * @param num the given number
 * @returns the given number padded with a two digits format
 */
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

/**
 * Creates the file name for the given race reference live results
 *
 * @param raceReference the given race reference
 * @returns the file name for the given race reference live results
 */
function createFileName(raceReference) {
  return raceReference.concat('.pdf');
}
