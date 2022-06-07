package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
)

// var todos []string

type entry struct {
	ID        int    `json:"id"`
	Entry     string `json:"entry"`
	Date      string `json:"date"`
	User_name string `json:"user_name"`
}

var todos = []entry{
	{ID: 1, Entry: "null", Date: "null", User_name: "null"},
	{ID: 1, Entry: "My first message", Date: "05/18/2022", User_name: "user1"},
	{ID: 2, Entry: "Hi name is user2", Date: "05/19/2022", User_name: "user2"},
	{ID: 3, Entry: "I made third message", Date: "05/20/2022", User_name: "user1"},
}

func Lists(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "Content-Type")
	c.JSON(http.StatusOK, gin.H{"list": todos})
}

func main() {
	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/api/lists", Lists)
	r.Run()
}
