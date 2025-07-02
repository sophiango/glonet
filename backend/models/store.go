package models

import "github.com/google/uuid"

type Store struct {
	ID           uuid.UUID    `json:"id"`
	Name         string       `json:"name"`
	Latitude     float64      `json:"latitude"`
	Longitude    float64      `json:"longitude"`
	Health       HealthStatus `json:"health"` // "green", "yellow", "red"
	Bandwidth    string       `json:"bandwidth"`
	DeviceCount  int          `json:"deviceCount"`
	IssueHistory []string     `json:"issueHistory"`
}
