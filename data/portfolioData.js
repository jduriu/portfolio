import frauditt from '@/images/projects/Frauddit.png'
import EventEase from '@/images/projects/EventEase.png'
import trippin from '@/images/projects/trippin.png'
import autoPilot from '@/images/projects/AutoPilot.png'
import InsightAI from '@/images/projects/InsightAI.png'

export const portfolioData = [
    {
        "id": 0,
        "title": "InsightAI",
        "description": `
        A NextJS journal application design with server-side rendering in mind. Users can log in and record journal instances
        which are stored and analyzed using OpenAI and LangChain. Entries are analyzed and the user is able to receive live
        feedback in the UI. The history view allows users to track their mood over time. Finally OpenAI is leveraged so users
        can query or question their entries and receive AI generated responses tailored to their entries.
        `,
        "technologyUsed": [
            "Javascript/React/NextJS",
            "Postgres",
            "OpenAI/GPT3.5",
            "LangChain",
        ],
        "challenges": `
        When using new frameworks and APIs there are always bound to be challenges. For this project, my main concern was finding
        documentation and previous examples in development. In some ways, the hardest part was waiting for modules and libraries
        to catch up and become compatible with NextJS 13.
        `,
        "futurePlans": `
        I intend to fortify this project such that it can be used by a number of people. Currently features are relying on capped services
        which can affect user experience. My plan is to continue to build out the API and add additional features.
        `,
        "image": InsightAI,
        "deployed": "https://insightai-ten.vercel.app/",
        "git": "https://gitlab.com/jduriu/event-ease",
    },
    {
        "id": 1,
        "title": "EventEase",
        "description": `
        A conference management application designed to handle both internal and client facing aspects. These
        include internal models to schedule conferences, locations, participants, and presentations. This application
        was built using domain-driven design techniques to house different parts of the application in microservices.
        Various data transfer techniques are used such as polling for user data, queuing
        `,
        "technologyUsed": [
            "Python/Django",
            "Javascript/React",
            "Postgres",
            "Docker",
            "RabbitMQ",
        ],
        "challenges": `
        This project was converted from a monolithic structure to microservices. It was definitely a challenge to convert a single
        Django project to multiple. Along with this came the conversion of database from the standard django sqlite to postgres.
        Transferring data was a challenge, but was resolved using the built in django data load commands.
        `,
        "futurePlans": `
        I intend to add some additional features to the front end user experience. These include bringing back in the accounts
        service for front end authentication/authorization, and adding more detailed view pages for conferences.
        `,
        "image": EventEase,
        "deployed": null,
        "git": "https://gitlab.com/jduriu/event-ease",
    },
    {
        "id": 2,
        "title": "Frauditt",
        "description": `
            This application was the combined effort of myself, Laurie Kim, Orion Schlegelmich,
            and Gary Lu. Starting from ideation and white-boarding all of the way into continuous
            integration and continuous deployment. The website is geared toward alerting and informing
            the community about fraudulent activities. Whether its a scam call or fake email, this
            website gives the community a single space to post their experiences and spread awareness.
            `,
        "technologyUsed": [
            "Python",
            "FastApi",
            "Javascript",
            "React",
            "PostGres",
            "Docker",
        ],
        "challenges": `
            This project had a lot of hurdles. Learning the FastApi framework in a matter of weeks
            was a huge challenge. Coming together as a team quickly and learning to work efficiently
            also provided challenges. We implemented user stories to produce work tickets to ensure
            the project was split amongst us and was completed in a logical manner.
            `,
        "futurePlans": `
            I think this project has a lot of potential. I intend to try and incorporate some additional microservices
            to allow users to comment and see more details regarding specific incidents. I would also like to implement
            a map feature to see where these frauds are most common and where they are concentrated.
            `,
        "image": frauditt,
        "deployed": null,
        "git": "https://gitlab.com/team-6-goljira/frauddit",
    },
    {
        "id": 3,
        "title": "AutoPilot",
        "description": `
            An application based on the combined effort of myself and Laurie Kim designed to manage a car dealership.
            It includes three different APIs, Inventory, Service, and Sales. Service and Sales both poll automobile data
            from the Inventory to determine if the car is available to be purchased or if it was previously purchased
            from the dealership. The service API has the ability to register new vehicles and assign work technicians
            and service jobs to be completed. The sales API can create sales records and assign sales representatives to them.
            `,
        "technologyUsed": [
            "Python/Django",
            "Javascript/React",
            "Docker",
            "Postgres",
        ],
        "challenges": `
            This project was developed off of a template scaffold. It was challenging to jump into someone else's
            repository and understand what every piece was doing. However, once I took some time to understand the
            source code, it became much easier to develop new features. This project was also my first experience working
            with a partner. We had to take time to consider processes and git workflows to ensure as little code conflicts
            as possible.
            `,
        "futurePlans": `
            None at this time
            `,
        "image": autoPilot,
        "deployed": null,
        "git": "https://gitlab.com/jduriu/AutoPilot",
    },
    {
        "id": 4,
        "title": "Trippin",
        "description": `
            A vacation planning application which
            allows the user to log a vacation trip, the duration of events,
            and their locations. There is also an added feature that allows the
            user to enter a yelp search url for a particular location and return
            `,
        "technologyUsed": [
            "Python",
            "Django",
            "Beautiful Soup",
            "SQLite",
        ],
        "challenges": `
            I faced several challenges in this project. Mainly at the time feeling like
            a novice with Python. However it was a great learning experience in what is
            possible. Understanding how the beautiful soup query feature parses data from
            html pages was a great way to understand how querying works and how it can
            be implemented in useful ways.
            `,
        "futurePlans": `
            This was one of the first applications I ever built, and it serves as a reminder of
            where I started in my journey into software development.
            `,
        "image": trippin,
        "deployed": null,
        "git": "https://gitlab.com/jduriu/trippin",
    },
]
