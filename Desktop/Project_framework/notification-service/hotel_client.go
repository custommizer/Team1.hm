package main

import (
	"fmt"

	"github.com/go-resty/resty/v2"
)

func GetHotels() (string, error) {
	client := resty.New()

	// Resty Middleware: log before request
	client.OnBeforeRequest(func(c *resty.Client, req *resty.Request) error {
		fmt.Println("[Resty] Requesting:", req.Method, req.URL)
		return nil
	})

	// Resty Middleware: log after response
	client.OnAfterResponse(func(c *resty.Client, resp *resty.Response) error {
		fmt.Println("[Resty] Response Code:", resp.StatusCode())
		return nil
	})

	resp, err := client.R().
		SetHeader("Accept", "application/json").
		Get("http://localhost:8080/hotels")

	if err != nil {
		return "", err
	}

	return resp.String(), nil
}
