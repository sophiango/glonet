package routes

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func TestGetStores(t *testing.T) {
	// Set Gin to Test Mode
	gin.SetMode(gin.TestMode)

	r := gin.Default()
	r.GET("/api/v1/stores", GetAllStores)

	req, err := http.NewRequest(http.MethodGet, "/api/v1/stores", nil)
	assert.NoError(t, err)

	rr := httptest.NewRecorder()
	r.ServeHTTP(rr, req)

	assert.Equal(t, http.StatusOK, rr.Code)
}
