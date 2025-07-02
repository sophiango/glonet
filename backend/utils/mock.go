package utils

import (
	"glonet/models"
	"math/rand"
	"time"

	"github.com/google/uuid"
)

func GenerateMockBandwidth() string {
	rand.Seed(time.Now().UnixNano())
	sampleBandwidth := []string{"100 Mbps", "500 Mbps", "1 Gbps"}
	return sampleBandwidth[rand.Intn(len(sampleBandwidth))]
}

func GenerateMockData() []models.Store {
	rand.Seed(time.Now().UnixNano())
	possibleStatuses := models.AllStatuses()

	// famouse apple store and their locations
	appleStores := []struct {
		Name      string
		Latitude  float64
		Longitude float64
	}{
		{Name: "Apple Fifth Avenue", Latitude: 40.7638, Longitude: -73.9730},
		{Name: "Apple Regent Street", Latitude: 51.5139, Longitude: -0.1415},
		{Name: "Apple Ginza", Latitude: 35.6726, Longitude: 139.7645},
		{Name: "Apple Piazza Liberty", Latitude: 45.4665, Longitude: 9.1914},
		{Name: "Apple Opera", Latitude: 48.8687, Longitude: 2.3323},
		{Name: "Apple Causeway Bay", Latitude: 22.2801, Longitude: 114.1837},
		{Name: "Apple Sydney", Latitude: -33.8681, Longitude: 151.2075},
		{Name: "Apple Michigan Avenue", Latitude: 41.8887, Longitude: -87.6253},
		{Name: "Apple San Francisco Union Square", Latitude: 37.7876, Longitude: -122.4079},
		{Name: "Apple Wangfujing", Latitude: 39.9079, Longitude: 116.4087},
	}

	var mockStores []models.Store
	for _, s := range appleStores {
		storeID := uuid.New()
		randStatus := possibleStatuses[rand.Intn(len(possibleStatuses))]
		randBandwidth := GenerateMockBandwidth()
		mockStores = append(mockStores, models.Store{
			ID:          storeID,
			Name:        s.Name,
			Latitude:    s.Latitude,
			Longitude:   s.Longitude,
			Health:      randStatus,
			Bandwidth:   randBandwidth,
			DeviceCount: rand.Intn(100),
		})
	}
	return mockStores
}
