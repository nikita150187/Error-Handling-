 const createReservation =(data, callback) =>{
    setTimeout(() =>{
        const error = Math.random() < 0.5; // 50% chance of failure
        if(error) {
            callback(new Error("Database error: Unable to create reservation"), null);
        } else {
            callback(null, {message: "Reservation created successfully!", data });
        }
    }, 1000);
 };
 
 const getReservation =(id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() < 0.5; //50% chance of failure
            if(error) {
                reject(new Error("Database error: Unable to fetch reservation"));
            } else {
                resolve({id, name: "Alice Ray", date: "2025-04-01"});
            }
        }, 1000);
    });
 };

 export { createReservation, getReservation };
