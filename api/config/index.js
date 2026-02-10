module.exports = async function (context, req) {
    context.res = {
        headers: { "Content-Type": "application/json" },
        body: {
            tenantId: process.env.TENANT_ID,
            clientId: process.env.CLIENT_ID
        }
    };
};