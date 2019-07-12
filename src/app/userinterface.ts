export interface Resource {
    resourceId: number;
    resourceName: string;
    resourceType: string;
    resourceImage?: string;
    hireResource: boolean;
    resourceRating: number;
    resourceAddress: string;
    resourceHourBilled: number;
    resourceTotalHours: number;
    resourceUpcomingJobs: number;
    resourceUpcomingJobsThisWeek: number;
    resourceCompletedJobs: number;
    resourceTotalJobs: number;
}
