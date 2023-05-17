{

    "name": "Queen Amdi",

    "description": "Queen Amdi [Multi-device] - A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience. 💃🏻❤️",

    "keywords": [

        "Queen Amdi",

        "WhatsApp",

        "Black Amda",

        "multi-device"

    ],

    "website": "https://amdaniwasa.com/",

    "repository": "https://github.com/BlackAmda/QueenAmdi",

    "logo": "https://amdaniwasa.com/assets/QAAppjson.gif",

    "success_url": "https://dashboard.heroku.com/apps/",

    "env": {

        

        

        

        

        "LANGUAGE": {

            "description": "Bot language",

            

            "value": "EN"

        },

        "TZ": {

            "description": "Your timezone",

            

            "value": "Asia/Colombo"

        }

    },

    "buildpacks": [

        {

            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"

        },

        {

            "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git"

        }

    ],

    "addons": [

        {

            "plan": "heroku-postgresql",

            "options": {

                "version": "13"

            }

        }

    ],

    "stack": "heroku-22"

}