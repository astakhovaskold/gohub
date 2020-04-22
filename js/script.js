var vue = new Vue ({
    el: '#gohub',
    data: {
        fcard: [
            {img: './img/feature-1.png', title: 'Be visible to “like”', desc: 'Strengthen your digital visibility in a universe where everyone is interested in travelling and renting gears. We help you build your presence  and make you relevant without you having to lift a finger!'},
            {img: './img/feature-2.png', title: 'Monitor online', desc: 'The platform has multiple functionalities and key features. With our intelligent system, you can approve bookings and monitor everything in your business online.'},
            {img: './img/feature-3.png', title: 'More income', desc: 'Being on a digital platform is another sales channel added to strengthen your business. More work, in your hands. With our insights tools, we analyze your gear\'s performance in any season'}
        ],

        menu_items: [
            {title: 'Product', link: '#'},
            {title: 'Customers', link: '#'},
            {title: 'Pricing', link: '#'},
            {title: 'Docs', link: '#'},
            {title: 'Sign In', link: '#', class: 'signin'}
        ],

        proofs_items: [
            {img: './img/proofs1.png', title: 'Higher Conversions', desc: 'Convert more website visitors into signups and purchases.'},
            {img: './img/proofs2.png', title: 'Save on Acquisition', desc: 'Your advertising spend will go further than ever before.'},
            {img: './img/proofs3.png', title: 'Increase Visitor Trust', desc: 'People trust companies they see other people buy from as well.'},
            {img: './img/proofs4.png', title: 'Social Influence', desc: 'Seeing other visitors taking action creates fear of missing out.'},
            {img: './img/proofs5.png', title: 'Activity Notifications', desc: 'Display recent sales and opt-ins on your pages and drive visitors to convert.'},
            {img: './img/proofs6.png', title: 'Customer Journeys', desc: 'Your advertising spend will go further than ever before.'},
            {img: './img/proofs7.png', title: 'Custom Timing', desc: 'Control when, how long and how fast notifications display on your site.'},
            {img: './img/proofs8.png', title: 'Live Visitor Count', desc: 'Show how many visitors are browsing your site - "28 people are viewing this page"'},
            {img: './img/proofs9.png', title: 'Visitor Identification', desc: 'We\'ll show you detailed profiles of every visitor who enters their email.'},
            {img: './img/proofs10.png', title: 'Custom Rules', desc: 'Granular control over how and when notifications display on your pages.'},
            {img: './img/proofs11.png', title: 'Mobile Optimized', desc: 'With mobile traffic approaching 70%, Proof looks amazing on mobile.'},
            {img: './img/proofs12.png', title: 'Language Translation', desc: 'Translate Recent Activity notification into any language you want. We\'re global.'},
        ],

        footer_menu: [
            {links: [
                'About us',
                'Newsroom',
                'Blog',
                'Gohub API',
                'Gift cards',
                'Careers',
                'Gohub vs. driving jobs'
                ]},

            {links: [
                'Offerings',
                'Gohub Eats for food delivery',
                'Gohub for Business',
                'Gohub Freight',
                'Gohub Health'
                ]}, 

            {links: [
                'Support',
                'Términos y condiciones',
                'Privacidad',
                'Ayuda',
                'Connect'
                ]}
        ],

        modalVisible: false,
        name: '',
        email: '',
        phone: '',
        agree: null,
        isDone: false
    },
    components: {
        'linked-in': {
        template: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>'
        },
        'fb': {
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>'
        },
        'twitter': {
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>'
        },
        'github': {
            template: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
        }
    },
    methods: {
        onSubmit() {

            this.name != '' ? console.log('Name: ', this.name) : ''
            this.email != '' ? console.log('E-mail: ', this.email) : ''
            this.phone != '' ? console.log('Phone: ', this.phone) : ''
            this.agree != null ? console.log('Agree: ', this.agree) : ''
            

            this.name = '',
            this.email = '',
            this.phone = '',
            this.agree = null,
            this.isDone = true
        }
    }
})