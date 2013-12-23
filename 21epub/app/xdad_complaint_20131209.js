
epub.app(function(){

	epub["import"]('epub.modules.bootstrap@1.0')
	epub["import"]('epub.modules.supersized@2.0')
	epub["import"]('epub.modules.page@3.0')
	epub["import"]('epub.modules.base@3.0')
	epub["import"]('epub.modules.jquery-validate@1.11.1')

	$(document).ready(function(){

		$.extend($.validator.messages, {
				required: "必选字段",
				remote: "请修正该字段",
				email: "请输入正确格式的电子邮件",
				mobile: "请输入正确的手机号码",
				url: "请输入合法的网址",
				date: "请输入合法的日期",
				dateISO: "请输入合法的日期 (ISO).",
				number: "请输入合法的数字",
				digits: "只能输入整数",
				creditcard: "请输入合法的信用卡号",
				equalTo: "请再次输入相同的值",
				accept: "请输入拥有合法后缀名的字符串",
				maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
				minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
				rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
				range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
				max: $.validator.format("请输入一个最大为 {0} 的值"),
				min: $.validator.format("请输入一个最小为 {0} 的值")
			});


		$.validator.addMethod("contractNo", function(value, element) {
			return this.optional(element) || /\w{5}-\d{3}-\d{7}$/.test(value);
        }, "请输入正确的合同编号");

		var validatorFirst = $( "form#first" ).validate({
			rules: {
                contractNo:{
                    required: true,
                    contractNo: true,
                }
            }
		});

		var validatorComplaint = $( "form#complaint" ).validate({
			rules: {
                contractNo:{
                    required: true,
                    contractNo: true,
                }
            }
		});

		$('form#first input[name="continue"]').live('click',function(){
			validatorFirst.element( 'input[name="projectName"]' );
			validatorFirst.element( 'input[name="contractNo"]' );

			if($('input.error').length == 0){
				$('form#complaint input[name="projectName"]').val($('form#first input[name="projectName"]').val());
				$('form#complaint input[name="contractNo"]').val($('form#first input[name="contractNo"]').val());
				$('form#complaint').css('display','block');
				$('form#first').css('display','none');
			}
		});
	})

})