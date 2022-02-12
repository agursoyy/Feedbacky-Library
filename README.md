# Feedbacky: lightweight feedback collector

Foobar is a js library for collecting visitor feedbacks across your web projects.

## Installation

### Script Tag

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```javascript
<script src="https://unpkg.com/browse/feedbacky-library@0.0.1/dist/feedbacky.js"></script>
```

## Usage

```javascript
feedback.render({elementId: "feedback-el-root", config: {projectId: "PROJECT_ID_FROM_DASHBOARD_APP"})
```

## Configuration

| **config**                 | **description**                                                                         | **type** | **required** | **default**                  |
|----------------------------|-----------------------------------------------------------------------------------------|----------|--------------|------------------------------|
|                            |                                                                                         |          |              |                              |
| elementId                  | html element id that modal feecbacky modal will render                                  | string   | true         | null                         |
| config                     | props used to customize feedbacky dashboard                                             | object   | true         | null                         |
| config.projectId           | unique project id from feedbacky dashboard app                                          | string   | true         | null                         |
| config.primaryColor        | color of the buttons on feedbacky modal                                                 | string   | false        | #764abc                      |
| config.textColor           | text color of the buttons on feedbacky modal                                            | string   | false        | #ffffff                      |
| config.postSubmitMessage   | message that will be visible on submit button after form is submitted (hex, rgba, etc.) | string   | false        | "Thanks four your feedback!" |
| config.submitButtonMessage | form submit button text color (hex, rgba, etc.)                                         | string   | false        | "Send Feedback!"             |
| config.showEmail           | whether email field is visible                                                          | boolean  | false        | false                        |
| config.defaultEmail        | default value of email field                                                            | string   | false        | ""                           |
| config.emailRequired       | whether email field is required                                                         | boolean  | false        | false                        |
| config.zIndex              | z-index of modal container                                                              | string   | false        | 999999                       |


## Admin Dashboard
You have to create an account on [admin dashboard](https://feedbacky-dashboard.herokuapp.com/) to render feecbacky modal on your website. Feedbacks are directly posted to your created project on dashboard.


## License
[MIT](https://choosealicense.com/licenses/mit/)
