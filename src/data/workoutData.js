export const workoutArray = [
    {
        id: 1,
        workoutType: 'interval',
        workoutName: '40/20 HIIT',
        totalRounds: 24,
        roundMinutes: 0,
        roundSeconds: 40,
        restMinutes: 0,
        restSeconds: 20,
        workoutDescription: 'Grab your timer! 40 seconds of work, 20 seconds of rest. Go straight down the list. Repeat the circuit 4 times. No rest between circuits, just the 20 seconds between exercises.',
        workout: [
            'Mountain Climber Burpees',
            'Pushup Sitouts',
            'Situp and Twist',
            'Pushup Plank Shoulder Touches',
            'Step Back Lunge to Single Leg Jump',
            'Single Leg Squats',
        ]
    },
    {
        id: 2,
        workoutType: 'running',
        workoutName: '4x10',
        totalRounds: 1,
        roundMinutes: 0,
        roundSeconds: 0,
        restMinutes: 0,
        restSeconds: 0,
        workoutDescription: `10 Reps per exercise, 4 Rounds. Rest only after you've completed a full round. No rest between exercises.`,
        workout: [
            'Pushups', 
            'Situps',
            'Squats',
            'Pike Pushups',
            'Leg Raises', 
            'Lunges',
            'Burpess',
            'V-ups',
            'Squat Jumps',
        ]
    },
    {
        id: 3,
        workoutType: 'interval',
        workoutName: '90/90',
        totalRounds: 18,
        roundMinutes: 1,
        roundSeconds: 30,
        restMinutes: 1,
        restSeconds: 30,
        workoutDescription: `90 seconds of work, 90 seconds of rest. When you get this much rest, your work intervals need to be tough. GO ALL OUT. Mark off a distance of about 100 yards. (You can also do 100 mountain climbers as a running substitute.) Start each 90 second round with a run out and back. When you get back from the run, finish the round with as many reps as possible of the exercise for that round. After 90 seconds, rest 90 and move to the next exercise. Repeat for 9 total rounds.`,
        workout: [
            'Burpees',
            'Squat Jumps',
            'Jumping Lunges'
        ]
    },
]