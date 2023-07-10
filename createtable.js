const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-1' });

const dynamodb = new AWS.DynamoDB();

const tableName = 'calculatedDataTable';

const createTable = async () => {
  const params = {
    TableName: tableName,
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' }, // Attribute definition for the primary key
      { AttributeName: 'portNames', AttributeType: 'SS' }, // Attribute definition for portNames (String Set)
      { AttributeName: 'totalDistance', AttributeType: 'N' } // Attribute definition for totalDistance (Number)
    ],
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' } // Primary key definition
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5, // Adjust the read capacity units based on your requirements
      WriteCapacityUnits: 5 // Adjust the write capacity units based on your requirements
    }
  };

  try {
    await dynamodb.createTable(params).promise();
    console.log(`Table ${tableName} created successfully.`);
  } catch (error) {
    console.error(`Error creating table ${tableName}:`, error);
  }
};

createTable();
