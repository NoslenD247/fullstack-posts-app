import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Posts Backend',
            version: '2.0.0',
            description: 'API for Posts',
            contact: {
                name: "Nelson López"
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ]
    },
    // USAMOS ** PARA QUE BUSQUE EN SUB-CARPETAS
    apis: ['./src/**/*.js', './src/app.js'] 
};

const specs = swaggerJSDoc(options);

export default specs
