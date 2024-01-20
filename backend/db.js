const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.tftjfvj.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected');

        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

        const data = await foodItemsCollection.find({}).toArray();
        const catData = await foodCategoryCollection.find({}).toArray();

        global.food_items = data;
        global.foodCategory = catData;

        
    } catch (error) {
        console.error('Error connecting to the database:', error);
    } 
};

// Call the function to connect to the database and fetch data
module.exports=mongoDB();
