db.users.find();

//1
db.users.find({ edad: { $gt: 18 } });

//2
db.users.find({
    $or:
        [
            { ciudad: { $regex: /^paris/ } },
            { ciudad: { $regex: /^london/ } }
        ]
});

//3
db.users.find({
    $and:
        [
            { salario: { $gt: 2000 } },
            { edad: { $lt: 30 } }
        ]
});

//4
db.users.find({
    $and:
        [
            { pais: { $regex: /^spain/ } },
            { salario: { $gt: 3000 } }
        ]
});

//5
db.users.find({
    $and:
        [
            { edad: { $gte: 25 } },
            { edad: { $lte: 35 } }
        ]
});

//6
db.users.find({ pais: { $ne: 'united states' } });

//7
db.users.find({
    $and:
        [
            { ciudad: { $eq: 'london' } },
            { salario: { $gt: 2500 } },
            { edad: { $gt: 30 } }
        ]
});

//8
db.users.find({
    $and:
        [
            { pais: { $eq: 'australia' } },
            { peso: { $gt: 140 } }
        ]
});

//9
db.users.find({
    $nor:
        [
            { ciudad: { $regex: /^paris/ } },
            { ciudad: { $regex: /^london/ } }
        ]
});

//10
db.users.find({
    $or:
        [
            { salario: { $lt: 2000 } },
            { edad: { $gt: 40 } }
        ]
});

//11
db.users.find({
    $and: [
        { pais: { $eq: "canadá" } },
        {
            $or: [
                { salario: { $gt: 4000 } },
                { altura: { $gt: 180 } }
            ]
        }
    ]
});

//12
db.users.find({
    $and: [
        { pais: { $eq: "italy" } },
        { edad: { $gte: 20 } },
        { edad: { $lte: 30 } }
    ]
});

//13
db.users.find({ correo: { $exists: false } });

//14
db.users.find({
    $and: [
        { pais: { $eq: "france" } },
        { salario: { $gte: 3000 } },
        { salario: { $lte: 5000 } }
    ]
});

//15
db.users.find({
    $and: [
        { pais: { $eq: "brazil" } },
        {
            $or: [
                { peso: { $lt: 120 } },
                { peso: { $gt: 140 } }
            ]
        }
    ]
});


//16
db.users.find({
    $and: [
        {
            $or: [
                { pais: { $eq: "argentina" } },
                { pais: { $eq: "chile" } }
            ]
        },
        { edad: { $lt: 25 } }
    ]
});

//17
db.users.find({
    $and: [
        {
            $nor: [
                { pais: { $eq: "spain" } },
                { pais: { $eq: "mexico" } }
            ]
        },
        { salario: { $lt: 3000 } }
    ]
});

//18
db.users.find({
    $and: [
        { pais: { $eq: "germany" } },
        {
            $or: [
                { salario: { $lt: 4000 } },
                { edad: { $gt: 35 } }
            ]
        }
    ]
});

//19
db.users.find({
    $and: [
        { pais: { $ne: "colombia" } },
        { altura: { $lt: 170 } }
    ]
});

//20
db.users.find({
    $and: [
        { pais: { $eq: "india" } },
        { salario: { $exists: false } }
    ]
});