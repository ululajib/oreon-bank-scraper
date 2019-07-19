var isfailed = "N";

function toOld() {
    window.open("https://ib.bankmandiri.co.id/retail/Login.do?action=form&lang=in_ID", "_top")
}

function toSafetyTips() {
    window.open("http://www.bankmandiri.co.id/article/phishingtips.aspx", "_top")
}
$("#userid_sebenarnya").autotab({
    target: "#pwd_sebenarnya",
    tabOnSelect: true
});
$(document).ready(function() {
    isfailed = $("#isFailed").val();
    if (isfailed == "Y") {
        $("#modalForce").modal({
            backdrop: "static"
        }).modal("show")
    }
    $.ajax({
        url: doSetFlag,
        cache: false,
        success: function(a) {}
    });
    $.ajax({
        url: doGetPK,
        cache: false,
        type: "POST",
        success: function(a) {
            $("#mod").attr("value", a.mod);
            $("#exp").attr("value", a.exp)
        }
    });
    $("#btnSubmit").click(function(d) {
        d.stopPropagation();
        $("#isFailed").val("N");
        if (modc.rc("fcib") == null) {
            callErrorAlertMessage(problemWhileProcessing);
            modc.cc("fcib", 0, 1);
            return false
        }
        var b = parseInt(modc.rc("fcib"));
        if (isNaN(b)) {
            b = 0
        }
        var a = parseInt(getMxLgn());
        if (b && b > a) {
            callErrorAlertMessage(loginExceededMessage);
            return false
        }
        $("#userid.fake_field_userid, #pwd.fake_field_pwd").attr("id", "");
        $("#userid_sebenarnya").attr("id", "userid");
        $("#pwd_sebenarnya").attr("id", "pwd");
        $("#userPass").attr("value", $("#pwd").val());
        $("#userId").attr("value", $("#userid").val());
        var c = do_encrypt(($("#pwd").val()), keyRequired);
        $("#userPassCrypto").attr("value", c);
        $("#loginForm").validate({
            errorClass: "error",
            onkeyup: false,
            onfocusout: false,
            submitHandler: function(e) {
                if (!$("#userid").valid()) {
                    return
                }
                if (!$("#pwd").valid()) {
                    return
                }
                $("#btnSubmit").attr("disabled", "disabled");
                $("#loginForm").attr("action", performLoginExecuteUrl);
                $("#userPass").val("");
                var f = do_getRandomNumberLogin("#loginForm");
                $.when(f).done(function(h) {
                    var g = do_encryptHSMAlphanumericLgn();
                    $.when(g).done(function(i) {
                        e.submit()
                    })
                })
            }
        }, 200)
    });
    $("#btnLogin").click(function(a) {
        $("#registrationForm").attr("action", performLoginActivationUrl);
        $("#registrationForm").submit()
    });
    $("#languageMenu").on("click", "li", function(a) {
        $("#lang").attr("value", this.id);
        var b = $(this).children("a").html();
        $(this).parent("li").siblings().removeClass("active");
        $(this).parents(".btn-group").find(".selection").html(b);
        $(this).parents("li").addClass("active")
    });
    $("#change-lang-section").on("click", function() {
        changeLang()
    });
    $("#btnOKForgotUser").on("click", function() {
        $("#landing-forgot-user").modal("hide")
    });
    initFlag()
});

function removeErrMsg(a) {
    if ($(a).val() != null && $(a).val() != undefined && $(a).val() != "") {
        $(a).removeClass("error");
        $(a).closest(".form-group").find("#userid-error").remove();
        return true
    }
}

function showImageLoader() {
    return ($("#imageLoader").show())
}

function getWysiwygData(a) {
    if (a == "0") {
        var c = $("#tnc-modal #viewHtml")
    } else {
        var c = $("#policy-modal #viewHtml")
    }
    c.html(showImageLoader());
    if (a == 0) {
        $("#tnc-modal #titlehtml").text(tnctitle)
    } else {
        $("#policy-modal #titlehtml").text(pnptitle)
    }
    var b = $.ajax({
        type: "POST",
        url: doViewHTML,
        data: {
            wysiwygcode: a
        }
    });
    $.when(b).done(function(d) {
        c.html(d.htmlCode)
    })
}

function droplistLanguage() {
    $("#languageSelect").select2({
        minimumResultsForSearch: -1,
        width: "120%",
        data: languageList.lang,
        dropdownCssClass: "bigdrop",
        formatResult: formatLanguage,
        formatSelection: formatLanguage,
        initSelection: function(a, b) {
            b($(a).val())
        },
        escapeMarkup: function(a) {
            return a
        }
    }).change(function() {
        var b = $("#languageSelect").select2("data");
        var a = changeLanguage + "?siteLanguage=" + b.id;
        $.ajax({
            url: a,
            contentType: "application/json",
            type: "POST",
            async: true,
            success: function(c) {}
        })
    });
    $("#languageSelect").select2("val", {
        id: "en_US",
        text: "English"
    })
}
var initFlag = function() {
    var b = $("#lang").val();
    var a = $("#change-language-img").data("flag");
    if (b == "in") {
        $("#change-language-name").html("Switch to English");
        $("#change-language-img").attr("src", a.en_)
    } else {
        $("#change-language-name").html("Ganti ke Bahasa Indonesia");
        $("#change-language-img").attr("src", a.in_)
    }
};
var changeFlag = function() {
    var b = $("#lang").val();
    var a = $("#change-language-img").data("flag");
    if (b == "in") {
        $("#lang").val("en")
    } else {
        $("#lang").val("in")
    }
};

function changeLang() {
    changeFlag();
    var a = $("#lang").val();
    assignLang(a)
}

function assignLang(b) {
    var a = changeLanguage + "?siteLanguage=" + b;
    changeIframeSrc(a)
}

function formatLanguage(b) {
    var a = '<img src="' + retail3 + "/images/language/" + b.id + '.png" /> &nbsp' + b.text + "</div>";
    return a
}

function onlineActivationTerms() {
    $.ajax({
        url: activateUrl,
        contentType: "application/json",
        type: "POST",
        async: false,
        success: function(a) {
            $("#tnc").text(a.message)
        }
    })
}

function onlineActivationVerify() {
    var b = document.forms[1];
    var a;
    $.ajax({
        url: verifyUrl,
        contentType: "application/json",
        data: JSON.stringify({
            accessId: b.accessId.value,
            accessCode: b.accessCode.value
        }),
        type: "POST",
        async: false,
        success: function(c) {
            a = c;
            b.customerId.value = c.customerId
        }
    });
    return a
}

function initCreate(a) {
    $.validator.addMethod("minlowercase", function(c, b, e) {
        if (e != 0) {
            var d = c.match(/[a-z]/g);
            return this.optional(b) || (d != null && d.length >= e)
        } else {
            return true
        }
    }, $.validator.format("Please enter at least {0} LowerCase Letter."));
    $.validator.addMethod("minuppercase", function(c, b, e) {
        if (e != 0) {
            var d = c.match(/[A-Z]/g);
            return this.optional(b) || (d != null && d.length >= e)
        } else {
            return true
        }
    }, $.validator.format("Please enter at least {0} UpperCase Letter."));
    $.validator.addMethod("minnumber", function(c, b, e) {
        if (e != 0) {
            var d = c.match(/[0-9]/g);
            return this.optional(b) || (d != null && d.length >= e)
        } else {
            return true
        }
    }, $.validator.format("Please enter at least {0} Numeric Letter."));
    $.validator.addMethod("alphanumeric", function(c, b, d) {
        if (d == "Y") {
            return this.optional(b) || /^\w+$/i.test(c)
        } else {
            return true
        }
    }, "Letters, numbers, and underscores only please");
    $("#registrationForm").validate({
        rules: {
            userIdCreate: {
                required: true,
                rangelength: [a.minUserIdLn, a.maxUserIdLn]
            },
            passwordCreate: {
                required: true,
                rangelength: [a.minPasswordLn, a.maxPasswordLn],
                alphanumeric: a.userPassAlphaNumeric,
                minlowercase: a.minLowerCaseLetterInPassword,
                minuppercase: a.minUpperCaseLetterInPassword,
                minnumber: a.minNumericInPassword
            },
            passwordCreateConfirm: {
                required: true,
                equalTo: "#passwordCreate"
            },
            userIdEmail: {
                required: true,
                email: true
            }
        },
        onfocusout: function(b) {
            jQuery(b).valid()
        },
        highlight: function(b) {
            $(b).closest(".control-group").removeClass("success").addClass("error")
        },
        success: function(b) {
            b.addClass("valid").closest(".control-group").removeClass("error").addClass("success")
        }
    })
}

function onlineActivationCreate() {
    var b = document.forms[1];
    var a;
    $.ajax({
        url: createUrl,
        contentType: "application/json",
        data: JSON.stringify({
            userIdCreate: b.userIdCreate.value,
            passwordCreate: b.passwordCreate.value,
            passwordCreateConfirm: b.passwordCreateConfirm.value,
            userEmailCreate: b.userEmailCreate.value,
            customerId: b.customerId.value
        }),
        type: "POST",
        async: false,
        success: function(c) {
            a = c
        }
    });
    return a
}
$(document).on("cut copy", "input.cannotpastecutcopy", function(a) {
    a.preventDefault()
});
$(document).on("paste", "input.cannotpastecutcopy", function(a) {
    a.preventDefault()
});
$(document).bind("contextmenu", function(a) {
    a.preventDefault()
});
$("#userid_sebenarnya").bind("keypress", function(c) {
    var a = c.which;
    var b = a >= 65 && a <= 90 || a >= 97 && a <= 122 || a >= 48 && a <= 57 || a == 95 || a == 8 || a == 0;
    if (!b) {
        c.preventDefault()
    }
});
