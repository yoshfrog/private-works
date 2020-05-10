var subTotal, total;

$(function() {
  $('input.value, input.inputNum, input.inputPages, input.valuePage').off('change');
  $('input.value, input.inputNum, input.inputPages, input.valuePage').on('change', function(){
    amountCalc();
  });
});

//value計算
function amountCalc(){
  total = 0;
  $('.box').each(function(){
    subTotal = 0;
    $(this).find('input.value:checked, input.inputNum:checked').each(function(){
      //ページ数入力の場合
      if($(this).hasClass('inputNum')) {
        var itemNest = $(this).closest('.itemNest');
        var num = parseInt($('.inputPages', itemNest).val());
        var array = [];
        $('.valuePage:checked', itemNest).each(function() {
          var pageVal = Number($(this).val());
          array.push(pageVal);
          console.log(array);
        });
        for (var i = 0; i < array.length; i++) {
          subTotal += array[i] * num;
        }
      //ベース input.value
      } else {
        subTotal += Number($(this).val());
      }
    });
    $(this).find('.subTotal').val(subTotal);
    total += subTotal;
  });
  $('.total').val(total);
  $('.totalExtr30').val((total) + (total * 0.3));
  $('.totalDscnt30').val((total) - (total * 0.3));
}


//input選択制御
$(function(){
  $('.box .itemNest').each(function(){
    var itemNest = this;
    //デフォルト 選択不可
    $('.itemChild, .itemGrndChild').prop('checked', false).prop('disabled', true).removeClass('focused');

    $('.box .itemNest').find('.itemParent').change(function(){
    //itemParent選択時、直下のitemchildのみ選択可
    if ($('.itemParent' , itemNest).prop("checked")) {
      $('.itemChild' , itemNest).prop('disabled', false).addClass('focused');
    } else {
      $('.itemChild', itemNest).prop('checked', false).prop('disabled', true).removeClass('focused');
      //入力値戻す
      $('.inputPages', itemNest).val("0");
      $('.inputFree', itemNest).val("");
    }

    //3階層目のテキスト入力欄制御
    $('.box .itemNest').find('input' , itemNest).change(function(){
      if ($('.others', itemNest).prop('checked')) {
        $('.itemGrndChild' , itemNest).prop('disabled', false).addClass('focused');
      } else {
        $('.itemGrndChild' , itemNest).prop('disabled', true).removeClass('focused').val("");
      }
    });
    amountCalc();
    });
  });
});


//clearBtn
$(function () {
	$('.clearBtn').on('click',function () {
		$(this).parents('.box').find('input').prop('checked', false);
		$(this).parents('.box').find('.inputFree').val('');
		$(this).parents('.box').find('.itemChild, .inputFree').prop('disabled', true).removeClass('focused');
		$(this).parents('.box').find('.subTotal, .inputPages').prop('disabled', true).removeClass('focused').val('0');
	amountCalc();
	});
});


