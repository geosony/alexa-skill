module.exports = {
    en: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">Great</say-as>`,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">hmm</say-as>`,
            WELCOME_MSG: `Welcome to Blue Health Platform. How can I help you? `,
            WELCOME_BACK_MSG: 'Welcome back {{name}}! ',
            REJECTED_MSG: 'No problem. Please say the date again so I can get it right.',
            GREET_MSG: '$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}}. ',
            MISSING_MSG: `$t(DOUBT_SPEECHCON). It looks like you haven't told me your intent yet. `,
            HELP_MSG: 'I can book an appointment for an HCP or I can share your concerns to the HCP, which one would you like to do ? ',
            REPROMPT_MSG: `If you're not sure what to do next try asking for help. If you want to leave just say stop. What would you like to do next? `,
            GOODBYE_MSG: ['Goodbye {{name}}! ', 'So long {{name}}! ', 'See you later {{name}}! ', 'Cheers {{name}}! '],
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            FALLBACK_MSG: `Sorry, I don't know about that. Please try again.`,
            ERROR_MSG: 'Sorry, there was an error. Please try again.',
            UNSUPPORTED_DEVICE_MSG: `This device doesn't support this operation. `,
            CANCEL_MSG: `Ok. Let's cancel that. `,
            API_ERROR_MSG: `I'm sorry, I'm having trouble accessing the external A.P.I., Please try again later. `,
            PROGRESSIVE_MSG: 'Let me check with our platform {{name}}. ',
            CONJUNCTION_MSG: ' and ',
            APPOINTMENT_CREATED: '$t(GREETING_SPEECHCON) {{name}}, it has created an appointment on {{date}}. Have a great day!'
        }
    },
};