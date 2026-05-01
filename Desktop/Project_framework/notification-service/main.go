package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		log.Printf("Incoming %s %s", c.Request.Method, c.Request.URL.Path)
		c.Next()
	})

	r.GET("/notifications/hotels", func(c *gin.Context) {
		hotels, err := GetHotels()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to get hotels"})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"message": "Hotels fetched from hotel-booking service",
			"hotels":  hotels,
		})
	})

	r.Run(":8083")
}
