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

    async function list(nextToken, limit) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": GRAPHQL_API_KEY,
        },
        body: JSON.stringify({
          query: listComments,
          variables: { limit: limit || 100000, nextToken },
        }),
      };
      const listing = await fetch(GRAPHQL_ENDPOINT, options).then((res) =>
        res.json()
      );
      return listing.data.listComments;
    }

    const start = performance.now();
    let listing;
    let comments = [];
    do {
      listing = await list(listing?.nextToken);
      comments = comments.concat(listing.items);
    } while (listing.nextToken);

    const end = performance.now();
    console.log(`fetching time: ${end - start} ms`);

    const st = performance.now();

    let { genderRatio } = comments.reduce(
      (prev, curr) => {
        if (!prev.genderRatio[curr.content]) {
          prev.genderRatio[curr.content] = 1;
        } else {
          prev.genderRatio[curr.content]++;
        }
        prev.count += curr.count;
        return prev;
      },
      { genderRatio: {} }
    );

    const en = performance.now();
    console.log(`loop time: ${en - st} ms`);

    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: JSON.stringify({
        comments: comments.length,
        genderRatio,
        fetchTime: end - start,
        loopTime: en - st,
      }),
    };
  } catch (error) {
    console.log(error);
  }
};
