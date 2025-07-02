package models

type HealthStatus string

const (
	StatusHealthy  HealthStatus = "healthy"
	StatusWarning  HealthStatus = "warning"
	StatusCritical HealthStatus = "critical"
	StatusUnknown  HealthStatus = "unknown" // Added for default/error cases
)

func AllStatuses() []HealthStatus {
	return []HealthStatus{StatusHealthy, StatusWarning, StatusCritical, StatusUnknown}
}
