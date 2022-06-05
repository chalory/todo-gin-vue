package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

var todos []string

func Lists(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"list": todos})
}

// func ListItem(c *gin.Context) {
// 	errormessage := "Index out of range"
// 	indexstring := c.Param("index")
// 	if index, err := strconv.Atoi(indexstring); err == nil && index < len(todos) {
// 		c.JSON(http.StatusOK, gin.H{"item": todos[index]})
// 	} else {
// 		if err != nil {
// 			errormessage = "Number expected: " + indexstring
// 		}
// 		c.JSON(http.StatusBadRequest, gin.H{"error": errormessage})
// 	}
// }

// func AddListItem(c *gin.Context) {
// 	item := c.PostForm("item")
// 	todos = append(todos, item)
// 	c.String(http.StatusCreated, c.FullPath()+"/"+strconv.Itoa(len(todos)-1))
// }

func main() {
	todos = append(todos, "Write the application")
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders: []string{"Content-Type,access-control-allow-origin, access-control-allow-headers"},
	}))

	r.Use(static.Serve("/", static.LocalFile("./todo-vue/dist", true)))
	r.GET("/api/lists", Lists)
	// r.GET("/api/lists/:index", ListItem)
	// r.POST("/api/lists", AddListItem)
	r.Run()
}
