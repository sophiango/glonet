package main

import (
	"glonet/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/api/v1/stores", routes.GetAllStores)
	r.Run(":8080")
}
