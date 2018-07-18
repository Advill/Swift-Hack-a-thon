app.get('/All-LP', async (req,res) => {
    var all = await pool.query('select license_plate.id, plate_text, time_stamp from license_plate join activity on license_plate.id = activity.id');
    console.log('all queried');
    var tempJson = {id: [], plate_text: [], time_stamp: []};
    for (var i = 0; i < all.rowCount; i++) {
       tempJson.id[i] = all.rows[i].id;
        tempJson.plate_text[i] = all.rows[i].plate_text;
        tempJson.time_stamp[i] = all.rows[i].time_stamp;
   }
    res.json(tempJson);
});
