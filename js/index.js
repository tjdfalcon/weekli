/**
 * Created by Collin Walker
 */
var weekli = new Weekli();

var weekli_id = new Weekli({
    wk_id: 'id',
    week: 'weekend'
});

var weekli_work = new Weekli({
    wk_id: 'work',
    week: 'workweek'
});


weekli.build();
//weekli_id.build();
//weekli_work.build();