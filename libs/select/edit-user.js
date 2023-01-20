"use strict";
$(function () {
    var e = $(".select2");
    e.length && e.each(function () {
        var e = $(this);
        e.wrap('<div class="position-relative"></div>').select2({
            placeholder: "Select value",
            dropdownParent: e.parent()
        })
    })
}), document.addEventListener("DOMContentLoaded", function (e) {
    var a, t;
    a = document.querySelector(".modal-edit-tax-id"), t = document.querySelector(".phone-number-mask"), a && new Cleave(a, {
        prefix: "TIN",
        blocks: [3, 3, 3, 4],
        uppercase: !0
    }), t && new Cleave(t, {
        phone: !0,
        phoneRegionCode: "US"
    }), FormValidation.formValidation(document.getElementById("editUserForm"), {
        fields: {
            modalEditUserFirstName: {
                validators: {
                    notEmpty: {
                        message: "Please enter your first name"
                    },
                    regexp: {
                        regexp: /^[a-zA-Zs]+$/,
                        message: "The first name can only consist of alphabetical"
                    }
                }
            },
            modalEditUserLastName: {
                validators: {
                    notEmpty: {
                        message: "Please enter your last name"
                    },
                    regexp: {
                        regexp: /^[a-zA-Zs]+$/,
                        message: "The last name can only consist of alphabetical"
                    }
                }
            },
            modalEditUserName: {
                validators: {
                    notEmpty: {
                        message: "Please enter your username"
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: "The name must be more than 6 and less than 30 characters long"
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9 ]+$/,
                        message: "The name can only consist of alphabetical, number and space"
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger,
            bootstrap5: new FormValidation.plugins.Bootstrap5({
                eleValidClass: "",
                rowSelector: ".col-12"
            }),
            submitButton: new FormValidation.plugins.SubmitButton,
            autoFocus: new FormValidation.plugins.AutoFocus
        }
    })
});