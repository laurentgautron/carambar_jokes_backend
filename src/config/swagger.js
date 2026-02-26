import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Carambar",
            version: "1.0.0",
            description: "Documentation de l'api Carambar"
        },
        servers: [
            {
                url: process.env.RENDER_EXTERNAL_URL || "http://localhost:3000"
            }
        ]
    },
    apis: ["./routes/*.js"]
}

export const specs = swaggerJSDoc(options);
