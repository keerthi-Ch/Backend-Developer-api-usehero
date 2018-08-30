
function setup() {
  noCanvas();

 
  var btnMerchant1 = select('#btnMerchant1');
  var btnMerchant2 = select ('#btnMerchant2');
  var btnsummary = select('#btnsummary');

  btnMerchant1.mousePressed(submitMerchantId1);
  btnMerchant2.mousePressed(submitMerchantId2);
  btnsummary.mousePressed(submitSummary);

  function submitMerchantId1(result) {
       
      console.log(result);
    }
     function submitMerchantId2(result) {
       
      console.log(result);
    }
      function submitSummary(result) {
       
      console.log(result);
    }
}
