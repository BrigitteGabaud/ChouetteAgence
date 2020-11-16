(function (n) {
    function f(n) {
        return new RegExp("^" + n + "$")
    }
    function e(n, t) {
        for (
            var u = Array.prototype.slice.call(arguments).splice(2),
            i = n.split("."),
            f = i.pop(),
            r = 0;
            r < i.length;
            r++
        ) 
            t = t[i[r]];
        return t[f].apply(this, u)
    }
    var r = [],
        t = {
            options: {
                prependExistingHelpBlock: !1,
                sniffHtml: !0,
                preventSubmit: !0,
                submitError: !1,
                submitSuccess: !1,
                semanticallyStrict: !1,
                autoAdd: {
                    helpBlocks: !0
                },
                filter: function () {
                    return !0
                }
            },
            methods: {
                init: function (f) {
                    var e = n.extend(!0, {}, t),
                        o,
                        s;
                    return e.options = n.extend(!0, e.options, f),
                    o = this,
                    s = n.unique(o.map(function () {
                        return n(this).parents("form")[0]
                    }).toArray()),
                    n(s).bind("submit", function (t) {
                        var i = n(this),
                            u = 0,
                            r = i
                                .find("input,textarea,select")
                                .not("[type=submit],[type=image]")
                                .filter(e.options.filter);
                        r
                            .trigger("submit.validation")
                            .trigger("validationLostFocus.validation");
                        r.each(function (t, i) {
                            var f = n(i),
                                r = f
                                    .parents(".form-group, .checkbox")
                                    .first();
                            r.hasClass("warning") && (r.removeClass("warning").addClass("error"), u++)
                        });
                        r.trigger("validationLostFocus.validation");
                        u
                            ? (
                                e.options.preventSubmit && t.preventDefault(),
                                i.addClass("error"),
                                n.isFunction(e.options.submitError) && e.options.submitError(i, t, r.jqBootstrapValidation("collectErrors", !0))
                            )
                            : (
                                i.removeClass("error"),
                                n.isFunction(e.options.submitSuccess) && e.options.submitSuccess(i, t)
                            )
                    }),
                    this.each(function () {
                        var t = n(this),
                            s = t
                                .parents(".form-group, .checkbox")
                                .first(),
                            o = s
                                .find(".help-block")
                                .first(),
                            p = t
                                .parents("form")
                                .first(),
                            h = [],
                            f,
                            v,
                            y,
                            a,
                            l,
                            c;
                        !o.length && e.options.autoAdd && e.options.autoAdd.helpBlocks && (
                            o = n('<div class="help-block" />'),
                            s.append(o),
                            r.push(o[0])
                        );
                        e.options.sniffHtml && (
                            f = "",
                            t.attr("pattern") !== undefined && (
                                f = "Not in the expected format<!-- data-validation-pattern-message to override -->",
                                t.data("validationPatternMessage") && (f = t.data("validationPatternMessage")),
                                t.data("validationPatternMessage", f),
                                t.data("validationPatternRegex", t.attr("pattern"))
                            ),
                            (t.attr("max") !== undefined || t.attr("aria-valuemax") !== undefined) && (
                                v = t.attr("max") !== undefined
                                    ? t.attr("max")
                                    : t.attr("aria-valuemax"),
                                f = "Too high: Maximum of '" + v + "'<!-- data-validation-max-message to overri" +
                                        "de -->",
                                t.data("validationMaxMessage") && (f = t.data("validationMaxMessage")),
                                t.data("validationMaxMessage", f),
                                t.data("validationMaxMax", v)
                            ),
                            (t.attr("min") !== undefined || t.attr("aria-valuemin") !== undefined) && (
                                y = t.attr("min") !== undefined
                                    ? t.attr("min")
                                    : t.attr("aria-valuemin"),
                                f = "Too low: Minimum of '" + y + "'<!-- data-validation-min-message to overrid" +
                                        "e -->",
                                t.data("validationMinMessage") && (f = t.data("validationMinMessage")),
                                t.data("validationMinMessage", f),
                                t.data("validationMinMin", y)
                            ),
                            t.attr("maxlength") !== undefined && (
                                f = "Too long: Maximum of '" + t.attr("maxlength") + "' characters<!-- data-val" +
                                        "idation-maxlength-message to override -->",
                                t.data("validationMaxlengthMessage") && (f = t.data("validationMaxlengthMessage")),
                                t.data("validationMaxlengthMessage", f),
                                t.data("validationMaxlengthMaxlength", t.attr("maxlength"))
                            ),
                            t.attr("minlength") !== undefined && (
                                f = "Too short: Minimum of '" + t.attr("minlength") + "' characters<!-- data-va" +
                                        "lidation-minlength-message to override -->",
                                t.data("validationMinlengthMessage") && (f = t.data("validationMinlengthMessage")),
                                t.data("validationMinlengthMessage", f),
                                t.data("validationMinlengthMinlength", t.attr("minlength"))
                            ),
                            (t.attr("required") !== undefined || t.attr("aria-required") !== undefined) && (
                                f = e.builtInValidators.required.message,
                                t.data("validationRequiredMessage") && (f = t.data("validationRequiredMessage")),
                                t.data("validationRequiredMessage", f)
                            ),
                            t.attr("type") !== undefined && t.attr("type").toLowerCase() === "number" && (
                                f = e.builtInValidators.number.message,
                                t.data("validationNumberMessage") && (f = t.data("validationNumberMessage")),
                                t.data("validationNumberMessage", f)
                            ),
                            t.attr("type") !== undefined && t.attr("type").toLowerCase() === "email" && (
                                f = "Not a valid email address<!-- data-validator-validemail-message to override --" +
                                            ">",
                                t.data("validationValidemailMessage")
                                    ? f = t.data("validationValidemailMessage")
                                    : t.data("validationEmailMessage") && (f = t.data("validationEmailMessage")),
                                t.data("validationValidemailMessage", f)
                            ),
                            t.attr("minchecked") !== undefined && (
                                f = "Not enough options checked; Minimum of '" + t.attr("minchecked") + "' requ" +
                                        "ired<!-- data-validation-minchecked-message to override -->",
                                t.data("validationMincheckedMessage") && (f = t.data("validationMincheckedMessage")),
                                t.data("validationMincheckedMessage", f),
                                t.data("validationMincheckedMinchecked", t.attr("minchecked"))
                            ),
                            t.attr("maxchecked") !== undefined && (
                                f = "Too many options checked; Maximum of '" + t.attr("maxchecked") + "' requir" +
                                        "ed<!-- data-validation-maxchecked-message to override -->",
                                t.data("validationMaxcheckedMessage") && (f = t.data("validationMaxcheckedMessage")),
                                t.data("validationMaxcheckedMessage", f),
                                t.data("validationMaxcheckedMaxchecked", t.attr("maxchecked"))
                            )
                        );
                        t.data("validation") !== undefined && (h = t.data("validation").split(","));
                        n.each(t.data(), function (n) {
                            var t = n
                                .replace(/([A-Z])/g, ",$1")
                                .split(",");
                            t[0] === "validation" && t[1] && h.push(t[1])
                        });
                        a = h;
                        l = [];
                        do 
                            n.each(h, function (n, t) {
                                h[n] = i(t)
                            }),
                            h = n.unique(h),
                            l = [],
                            n.each(a, function (r, u) {
                                if (t.data("validation" + u + "Shortcut") !== undefined) 
                                    n.each(t.data("validation" + u + "Shortcut").split(","), function (n, t) {
                                        l.push(t)
                                    });
                                else if (e.builtInValidators[u.toLowerCase()]) {
                                    var f = e.builtInValidators[u.toLowerCase()];
                                    f
                                        .type
                                        .toLowerCase() === "shortcut" && n.each(
                                            f.shortcut.split(","),
                                            function (n, t) {
                                            t = i(t);
                                            l.push(t);
                                            h.push(t)
                                        }
                                        )
                                }
                            }),
                            a = l;
                        while (a.length > 0);
                        c = {};
                        n.each(h, function (r, u) {
                            var o = t.data("validation" + u + "Message"),
                                l = o !== undefined,
                                f = !1,
                                s,
                                h;
                            o = o
                                ? o
                                : "'" + u + "' validation failed <!-- Add attribute 'data-validation-" + u.toLowerCase() +
                                        "-message' to input to change this message -->";
                            n.each(e.validatorTypes, function (r, e) {
                                c[r] === undefined && (c[r] = []);
                                f || t.data("validation" + u + i(e.name)) === undefined || (
                                    c[r].push(n.extend(!0, {
                                        name: i(e.name),
                                        message: o
                                    }, e.init(t, u))),
                                    f = !0
                                )
                            });
                            !f && e.builtInValidators[u.toLowerCase()] && (
                                s = n.extend(!0, {}, e.builtInValidators[u.toLowerCase()]),
                                l && (s.message = o),
                                h = s.type.toLowerCase(),
                                h === "shortcut"
                                    ? f = !0
                                    : n.each(e.validatorTypes, function (r, e) {
                                        c[r] === undefined && (c[r] = []);
                                        f || h !== r.toLowerCase() || (t.data("validation" + u + i(e.name), s[
                                            e
                                                .name
                                                .toLowerCase()
                                        ]), c[h].push(n.extend(s, e.init(t, u))), f = !0)
                                    })
                            );
                            f || n.error("Cannot find validation info for '" + u + "'")
                        });
                        o.data(
                            "original-contents",
                            o.data("original-contents")
                                ? o.data("original-contents")
                                : o.html()
                        );
                        o.data(
                            "original-role",
                            o.data("original-role")
                                ? o.data("original-role")
                                : o.attr("role")
                        );
                        s.data(
                            "original-classes",
                            s.data("original-clases")
                                ? s.data("original-classes")
                                : s.attr("class")
                        );
                        t.data(
                            "original-aria-invalid",
                            t.data("original-aria-invalid")
                                ? t.data("original-aria-invalid")
                                : t.attr("aria-invalid")
                        );
                        t.bind("validation.validation", function (i, r) {
                            var f = u(t),
                                o = [];
                            return n.each(c, function (i, u) {
                                (
                                    f || f.length || r && r.includeEmpty || !!e.validatorTypes[i].blockSubmit && r && !!r.submitting
                                ) && n.each(u, function (n, r) {
                                    e
                                        .validatorTypes[i]
                                        .validate(t, f, r) && o.push(r.message)
                                })
                            }),
                            o
                        });
                        t.bind("getValidators.validation", function () {
                            return c
                        });
                        t.bind("submit.validation", function () {
                            return t.triggerHandler("change.validation", {
                                submitting: !0
                            })
                        });
                        t.bind([
                            "keyup",
                            "focus",
                            "blur",
                            "click",
                            "keydown",
                            "keypress",
                            "change"
                        ].join(".validation ") + ".validation", function (i, r) {
                            var h = u(t),
                                f = [];
                            s
                                .find("input,textarea,select")
                                .each(function (i, u) {
                                    var o = f.length,
                                        e;
                                    n.each(n(u).triggerHandler("validation.validation", r), function (n, t) {
                                        f.push(t)
                                    });
                                    f.length > o
                                        ? n(u).attr("aria-invalid", "true")
                                        : (e = t.data("original-aria-invalid"), n(u).attr(
                                            "aria-invalid",
                                            e !== undefined
                                                ? e
                                                : !1
                                        ))
                                });
                            p
                                .find("input,select,textarea")
                                .not(t)
                                .not('[name="' + t.attr("name") + '"]')
                                .trigger("validationLostFocus.validation");
                            f = n.unique(f.sort());
                            f.length
                                ? (
                                    s.removeClass("success error").addClass("warning"),
                                    e.options.semanticallyStrict && f.length === 1
                                        ? o.html(f[0] + (
                                            e.options.prependExistingHelpBlock
                                                ? o.data("original-contents")
                                                : ""
                                        ))
                                        : o.html(
                                            '<ul class="list-unstyled alert alert-warning" role="alert"><li>' + f.join("<\/li><li>") +
                                            "<\/li><\/ul>" + (
                                                e.options.prependExistingHelpBlock
                                                    ? o.data("original-contents")
                                                    : ""
                                            )
                                        )
                                )
                                : (
                                    s.removeClass("warning error success"),
                                    h.length > 0 && s.addClass("success"),
                                    o.html(o.data("original-contents"))
                                );
                            i.type === "blur" && s.removeClass("success")
                        });
                        t.bind("validationLostFocus.validation", function () {
                            s.removeClass("success")
                        })
                    })
                },
                destroy: function () {
                    return this.each(function () {
                        var t = n(this),
                            u = t
                                .parents(".form-group, .checkbox")
                                .first(),
                            i = u
                                .find(".help-block")
                                .first();
                        t.unbind(".validation");
                        i.html(i.data("original-contents"));
                        u.attr("class", u.data("original-classes"));
                        t.attr("aria-invalid", t.data("original-aria-invalid"));
                        i.attr("role", t.data("original-role"));
                        r.indexOf(i[0]) > -1 && i.remove()
                    })
                },
                collectErrors: function () {
                    var t = {};
                    return this.each(function (i, r) {
                        var u = n(r),
                            f = u.attr("name"),
                            e = u.triggerHandler("validation.validation", {
                                includeEmpty: !0
                            });
                        t[f] = n.extend(!0, e, t[f])
                    }),
                    n.each(t, function (n, i) {
                        i.length === 0 && delete t[n]
                    }),
                    t
                },
                hasErrors: function () {
                    var t = [];
                    return this.each(function (i, r) {
                        t = t.concat(
                            n(r).triggerHandler("getValidators.validation")
                                ? n(r).triggerHandler("validation.validation", {
                                    submitting: !0
                                })
                                : []
                        )
                    }),
                    t.length > 0
                },
                override: function (i) {
                    t = n.extend(!0, t, i)
                }
            },
            validatorTypes: {
                callback: {
                    name: "callback",
                    init: function (n, t) {
                        return {
                            validatorName: t,
                            callback: n.data("validation" + t + "Callback"),
                            lastValue: n.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function (n, t, i) {
                        if (i.lastValue === t && i.lastFinished) 
                            return !i.lastValid;
                        if (i.lastFinished === !0) {
                            i.lastValue = t;
                            i.lastValid = !0;
                            i.lastFinished = !1;
                            var r = i,
                                u = n;
                            e(i.callback, window, n, t, function (n) {
                                r.lastValue === n.value && (
                                    r.lastValid = n.valid,
                                    n.message && (r.message = n.message),
                                    r.lastFinished = !0,
                                    u.data(
                                        "validation" + r.validatorName + "Message",
                                        r.message
                                    ),
                                    setTimeout(function () {
                                        u.trigger("change.validation")
                                    }, 1)
                                )
                            })
                        }
                        return !1
                    }
                },
                ajax: {
                    name: "ajax",
                    init: function (n, t) {
                        return {
                            validatorName: t,
                            url: n.data("validation" + t + "Ajax"),
                            lastValue: n.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function (t, i, r) {
                        return "" + r.lastValue == "" + i && r.lastFinished === !0
                            ? r.lastValid === !1
                            : (
                                r.lastFinished === !0 && (r.lastValue = i, r.lastValid = !0, r.lastFinished = !1, n.ajax({
                                    url: r.url,
                                    data: "value=" + i + "&field=" + t.attr("name"),
                                    dataType: "json",
                                    success: function (n) {
                                        "" + r.lastValue == "" + n.value && (
                                            r.lastValid = !!n.valid,
                                            n.message && (r.message = n.message),
                                            r.lastFinished = !0,
                                            t.data(
                                                "validation" + r.validatorName + "Message",
                                                r.message
                                            ),
                                            setTimeout(function () {
                                                t.trigger("change.validation")
                                            }, 1)
                                        )
                                    },
                                    failure: function () {
                                        r.lastValid = !0;
                                        r.message = "ajax call failed";
                                        r.lastFinished = !0;
                                        t.data("validation" + r.validatorName + "Message", r.message);
                                        setTimeout(function () {
                                            t.trigger("change.validation")
                                        }, 1)
                                    }
                                })),
                                !1
                            )
                    }
                },
                regex: {
                    name: "regex",
                    init: function (n, t) {
                        return {
                            regex: f(n.data("validation" + t + "Regex"))
                        }
                    },
                    validate: function (n, t, i) {
                        return !i
                            .regex
                            .test(t) && !i.negative || i
                            .regex
                            .test(t) && i.negative
                    }
                },
                required: {
                    name: "required",
                    init: function () {
                        return {}
                    },
                    validate: function (n, t, i) {
                        return !!(t.length === 0 && !i.negative) || !!(t.length > 0 && i.negative)
                    },
                    blockSubmit: !0
                },
                match: {
                    name: "match",
                    init: function (n, t) {
                        var i = n
                            .parents("form")
                            .first()
                            .find('[name="' + n.data("validation" + t + "Match") + '"]')
                            .first();
                        return i.bind("validation.validation", function () {
                            n.trigger("change.validation", {
                                submitting: !0
                            })
                        }), {element: i}
                    },
                    validate: function (n, t, i) {
                        return t !== i
                            .element
                            .val() && !i.negative || t === i
                            .element
                            .val() && i.negative
                    },
                    blockSubmit: !0
                },
                max: {
                    name: "max",
                    init: function (n, t) {
                        return {
                            max: n.data("validation" + t + "Max")
                        }
                    },
                    validate: function (n, t, i) {
                        return parseFloat(t, 10) > parseFloat(i.max, 10) && !i.negative || parseFloat(
                            t,
                            10
                        ) <= parseFloat(i.max, 10) && i.negative
                    }
                },
                min: {
                    name: "min",
                    init: function (n, t) {
                        return {
                            min: n.data("validation" + t + "Min")
                        }
                    },
                    validate: function (n, t, i) {
                        return parseFloat(t) < parseFloat(i.min) && !i.negative || parseFloat(t) >= parseFloat(
                            i.min
                        ) && i.negative
                    }
                },
                maxlength: {
                    name: "maxlength",
                    init: function (n, t) {
                        return {
                            maxlength: n.data("validation" + t + "Maxlength")
                        }
                    },
                    validate: function (n, t, i) {
                        return t.length > i.maxlength && !i.negative || t.length <= i.maxlength && i.negative
                    }
                },
                minlength: {
                    name: "minlength",
                    init: function (n, t) {
                        return {
                            minlength: n.data("validation" + t + "Minlength")
                        }
                    },
                    validate: function (n, t, i) {
                        return t.length < i.minlength && !i.negative || t.length >= i.minlength && i.negative
                    }
                },
                maxchecked: {
                    name: "maxchecked",
                    init: function (n, t) {
                        var i = n
                            .parents("form")
                            .first()
                            .find('[name="' + n.attr("name") + '"]');
                        return i.bind("click.validation", function () {
                            n.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            maxchecked: n.data("validation" + t + "Maxchecked"),
                            elements: i
                        }
                    },
                    validate: function (n, t, i) {
                        return i
                            .elements
                            .filter(":checked")
                            .length > i.maxchecked && !i.negative || i
                            .elements
                            .filter(":checked")
                            .length <= i.maxchecked && i.negative
                    },
                    blockSubmit: !0
                },
                minchecked: {
                    name: "minchecked",
                    init: function (n, t) {
                        var i = n
                            .parents("form")
                            .first()
                            .find('[name="' + n.attr("name") + '"]');
                        return i.bind("click.validation", function () {
                            n.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            minchecked: n.data("validation" + t + "Minchecked"),
                            elements: i
                        }
                    },
                    validate: function (n, t, i) {
                        return i
                            .elements
                            .filter(":checked")
                            .length < i.minchecked && !i.negative || i
                            .elements
                            .filter(":checked")
                            .length >= i.minchecked && i.negative
                    },
                    blockSubmit: !0
                }
            },
            builtInValidators: {
                email: {
                    name: "Email",
                    type: "shortcut",
                    shortcut: "validemail"
                },
                validemail: {
                    name: "Validemail",
                    type: "regex",
                    regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",
                    message: "Not a valid email address<!-- data-validator-validemail-message to override --" +
                            ">"
                },
                passwordagain: {
                    name: "Passwordagain",
                    type: "match",
                    match: "password",
                    message: "Does not match the given password<!-- data-validator-paswordagain-message to o" +
                            "verride -->"
                },
                positive: {
                    name: "Positive",
                    type: "shortcut",
                    shortcut: "number,positivenumber"
                },
                negative: {
                    name: "Negative",
                    type: "shortcut",
                    shortcut: "number,negativenumber"
                },
                number: {
                    name: "Number",
                    type: "regex",
                    regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                    message: "Must be a number<!-- data-validator-number-message to override -->"
                },
                integer: {
                    name: "Integer",
                    type: "regex",
                    regex: "[+-]?\\d+",
                    message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
                },
                positivenumber: {
                    name: "Positivenumber",
                    type: "min",
                    min: 0,
                    message: "Must be a positive number<!-- data-validator-positivenumber-message to overrid" +
                            "e -->"
                },
                negativenumber: {
                    name: "Negativenumber",
                    type: "max",
                    max: 0,
                    message: "Must be a negative number<!-- data-validator-negativenumber-message to overrid" +
                            "e -->"
                },
                required: {
                    name: "Required",
                    type: "required",
                    message: "This is required<!-- data-validator-required-message to override -->"
                },
                checkone: {
                    name: "Checkone",
                    type: "minchecked",
                    minchecked: 1,
                    message: "Check at least one option<!-- data-validation-checkone-message to override -->"
                }
            }
        },
        i = function (n) {
            return n
                .toLowerCase()
                .replace(/(^|\s)([a-z])/g, function (n, t, i) {
                    return t + i.toUpperCase()
                })
        },
        u = function (t) {
            var i = t.val(),
                r = t.attr("type");
            return r === "checkbox" && (
                i = t.is(":checked")
                    ? i
                    : ""
            ),
            r === "radio" && (
                i = n(
                    'input[name="' + t.attr("name") + '"]:checked'
                ).length > 0
                    ? i
                    : ""
            ),
            i
        };
    n.fn.jqBootstrapValidation = function (i) {
        return t.methods[i]
            ? t
                .methods[i]
                .apply(this, Array.prototype.slice.call(arguments, 1))
            : typeof i != "object" && i
                ? (n.error(
                    "Method " + i + " does not exist on jQuery.jqBootstrapValidation"
                ), null)
                : t
                    .methods
                    .init
                    .apply(this, arguments)
    };
    n.jqBootstrapValidation = function () {
        n(":input")
            .not("[type=image],[type=submit]")
            .jqBootstrapValidation
            .apply(this, arguments)
    }
})(jQuery)