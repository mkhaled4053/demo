/* Amplify Params - DO NOT EDIT
	API_DEMO_GRAPHQLAPIENDPOINTOUTPUT
	API_DEMO_GRAPHQLAPIIDOUTPUT
	API_DEMO_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { listComments } = require("./constants/queries");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const GRAPHQL_ENDPOINT = process.env.API_DEMO_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_DEMO_GRAPHQLAPIKEYOUTPUT;

exports.handler = async (event) => {
  try {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // async function list() {
    //     let listing = (
    //       await client.graphql({
    //         query: listComments,

    //         variables: { limit: limit || 100000, nextToken },
    //       })
    //     ).data.listComments;

    //     return listing;
    //   }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": GRAPHQL_API_KEY,
      },
      body: JSON.stringify({ query: listComments, variables: {} }),
    };
    const response = await fetch(GRAPHQL_ENDPOINT, options).then(res => res.json());

    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
  }
};
