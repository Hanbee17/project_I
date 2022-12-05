//https://www.bpwebs.com/pull-data-from-google-sheets-to-html-table/

function doGet() {
  return HtmlService.createTemplateFromFile('index3').evaluate();
}

//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "1MAc5oKTeZXeqkAvmZlMITRiXazPKQRKL05Oj1YZb6jw"; //CHANGE
  var dataRange     = "Data!A2:F"; //CHANGE

  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;

  return values;
}

//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
view raw
