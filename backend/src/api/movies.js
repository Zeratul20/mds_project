const router = require("express").Router({ mergeParams: true });
const { knex } = require("../services/mysql");


//get post put delete

router.get("movies", async(req, res, next) =>
{
    try{
        const movies = await knex("movies");
        res.send(movies);
    }
    catch (error) {
        next(error);
    }
}
);
router.get("movies/:movieId", async(req,res,next)=>{
    try{
        const id = req.params.movieId;
        const movies = await knex("users").where({id});
        res.send(movies);
    }
    catch (error) {
        next(error);
    }
});
router.put("movies/:movieId", async(req,res,next)=>{
    try{
        const id = req.params.movieId;
        const movies = await knex("movies").where({id});
        if(movies.length!=1) {
            res.status(400);
            res.send("Can't find movie");
            return;
          }
          await knex("movies").update(req.body).where(id);
    }
    catch(error){
        next(error);
    }
});
router.delete("movies/:movieId", async(req,res,next)=>{
    try{
        const id = req.params.movieId;
        const movies = await knex("movies").where({id});
        if(movies.length<1) {
            res.status(400);
            res.send("Can't find movie");
            return;
          }
          await knex("movies").delete().where({id});
    }
    catch(error){
        next(error);
    }
});
router.post("movies", async(req,res,next)=>{
    try{
        const {name} = req.body;
        const users = await knex("movies").where({ name });
        if (users.length > 0) {
            res.status(400);
            res.send("Movie already exists");
            return;
        }
        await knex("moviess").insert(req.body);
    }
    catch(error)
    {
        next(error);
    }
});