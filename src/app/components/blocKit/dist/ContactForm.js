"use client";
"use strict";
exports.__esModule = true;
var blocKit_module_css_1 = require("./core/blocKit.module.css");
var react_1 = require("react");
var emailjs_com_1 = require("emailjs-com");
var Subtitle_1 = require("./Subtitle");
var MainTitle_1 = require("./MainTitle");
function ContactForm(props) {
    /* Define defaults */
    var defaultLabels = ["Name", "Email", "Message"];
    var defaultButtonText = "Send";
    /* Normalize props */
    var title = props.title ? props.title : 'Contact';
    var labels = props.labels ? props.labels : defaultLabels;
    var submitButton = props.submitButton ? props.submitButton : defaultButtonText;
    var id = props.id ? props.id : 'defaultForm';
    var formRef = react_1.useRef(null);
    var _a = react_1.useState(submitButton), status = _a[0], setStatus = _a[1];
    /* Handle sending the email */
    var sendEmail = function (e) {
        emailjs_com_1["default"].init(props.EMAILJS_KEY);
        e.preventDefault();
        if (!formRef.current)
            return;
        // Grab the individual fields by name
        //const { name, email, message } = formRef.current.elements as HTMLInputElement;
        // elements.name.value, elements.email.value, etc.
        var form = formRef.current;
        var nameInput = form.elements.namedItem('name').value;
        var emailInput = form.elements.namedItem('email').value;
        var messageInput = form.elements.namedItem('message').value;
        // ... work with emailInput and passwordInput
        var params = {
            name: nameInput,
            email: emailInput,
            message: messageInput
        };
        var serviceID = props.SERVICE_ID ? props.SERVICE_ID : 'default_service';
        var templateID = props.TEMPLATE_ID;
        setStatus('Sending…');
        emailjs_com_1["default"]
            .send(serviceID, // pull service ID
        templateID, // pull template ID
        params)
            .then(function () {
            setStatus('Message sent!');
            formRef.current.reset();
        }, function (err) {
            console.error(err);
            setStatus('Failed to send, please try later.');
        });
    };
    return (React.createElement("form", { className: blocKit_module_css_1["default"].contactForm, id: id, ref: formRef, onSubmit: sendEmail },
        props.title ? React.createElement(MainTitle_1["default"], { text: title, id: blocKit_module_css_1["default"].underlined }) : React.createElement(React.Fragment, null),
        React.createElement("div", null,
            React.createElement(Subtitle_1["default"], { text: labels[0] }),
            React.createElement("input", { type: "text", name: "name", required: true })),
        React.createElement("div", null,
            React.createElement(Subtitle_1["default"], { text: labels[1] }),
            React.createElement("input", { type: "email", name: "email", required: true })),
        React.createElement("div", null,
            React.createElement(Subtitle_1["default"], { text: labels[2] }),
            React.createElement("textarea", { name: "message", id: blocKit_module_css_1["default"].messageBox, required: true })),
        React.createElement("button", { type: "submit", className: blocKit_module_css_1["default"].submitButton },
            React.createElement(Subtitle_1["default"], { text: status, fontSize: "18px", id: blocKit_module_css_1["default"].text }))));
}
exports["default"] = ContactForm;
;
