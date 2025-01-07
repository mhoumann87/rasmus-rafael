// Set the copyright information in the footer
const copy = () => {
  const copyInfo = {
    startDate: 2012,
    date: new Date().getFullYear(),
    name: 'Rasmus Rafael',
  };

  return copyInfo.date !== copyInfo.startDate
    ? `&copy;${copyInfo.startDate} - ${copyInfo.date} by <a href="mailto: frierasmus@hotmail.com">${copyInfo.name}</a>. All rights reserved.`
    : `&copy;${copyInfo.startDate} by <a href="mailto: frierasmus@hotmail.com">${copyInfo.name}</a>. All rights reserved.`;
};

document.getElementById('copy').innerHTML = copy();
