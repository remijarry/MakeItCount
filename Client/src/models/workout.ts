export interface IWorkout {
    id: number,
    shortDescription: string,
    title: string,
    workoutItems: IWorkoutItem[],
    warmupDescription: string | null,
    cooldownDescription: string | null,
    warmUpExercises: IExercise[] | null,
    coolDownExercises: IExercise[] | null,
    order: number,
    trackName: string
}

export interface IWorkoutItem {
    id: number,
    name: string,
    info: string,
    position: number,
    selectedExercises: IExercise[],
}

export interface IExercise {
    id: number | string,
    name: string,
    videoUrl?: string | ''
    videoId?: string | '',
}
