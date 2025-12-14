export interface StudentTopic {
    // specific topic, e.g. Algebra II
    topic: string;
    // topic Id starts with the letter I, followed by 5 digits
    topicId: string;
    // overall category, such as Math for for Albegra II
    category: string;
    // 0-100% grade assigned by tutor
    grade: number;
    // tutor Id assigned to this topic, might change to array later
    tutorId: string;

}

export interface TutorTopic {
    // specific topic, e.g. Algebra II
    topic: string;
    // topic Id starts with  the letter I, followed by 5 digits
    topicId: string;
    // overall category, such as Math for for Albegra II
    category: string;
    // 1-5 rating provided by student feedback
    rating: number;
    // optional array of student Ids that the tutor tutors
    students?: string[];
}

export interface StudentAward {
    // topicId
    topic: string;
    // title of award
    type: string;
}

export interface ScheduleAvailability {
    // weekday
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
    // start time available for that day, in 1 hour blocks, military time
    time: number;
}

export interface ScheduleBlock {
    // lesson Id starts withthe letter L, followed by 5 digits
    id: string;
    // specific day in UTC format
    day: string;
    // start time of lesson, in 1 hour block, military time
    time: number;
    // id of student being tutored
    studentId: string;
    // id of tutor providing the tutoring
    tutorId: string;
    // student topic Id
    topicId: string;
    status: 'scheduled' | 'completed' | 'cancelled' | 'no-show' 
}

export interface StudentProps {
    // first name of student
    nameFirst: string;
    // last name of student
    nameLast: string;
    // student Id starts with the letter S, followed by 5 digits
    studentId: string;
    // array of student subjects
    subjects: StudentTopic[];
    availability: ScheduleAvailability[];
    scheduledLessons: ScheduleBlock[];
    awards: StudentAward[]
}

export interface TutorProps {
    // first name of tutor
    nameFirst: string;
    // last name of tutor
    nameLast: string;
    // tutor Id starts with the letter T, followed by 5 digits
    tutorId: string;
    // array of tutor subjects
    subjects: TutorTopic[];
    availability: ScheduleAvailability[];
    scheduledLessons: ScheduleBlock[];
}


export const alg2testTopic: StudentTopic = {
    topic: "Algebra II",
    topicId: "I00001",
    category: "Mathematics",
    grade: 72.5,
    tutorId: "T00001"
}

export const alg2testTopicTutor: TutorTopic = {
    topic: "Algebra II",
    topicId: "I00001",
    category: "Mathematics",
    rating: 5
}

export const calc1testTopic: StudentTopic = {
    topic: "Calculus I",
    topicId: "I00002",
    category: "Mathematics",
    grade: 63.0,
    tutorId: "T00001"
}

export const calc1testTopicTutor: TutorTopic = {
    topic: "Calculus I",
    topicId: "I00002",
    category: "Mathematics",
    rating: 3.0
}

export const stat3testTopic: StudentTopic = {
    topic: "Statistics III",
    topicId: "I00003",
    category: "Mathematics",
    grade: 87.5,
    tutorId: "T00002"
}

export const stat3testTopicTutor: TutorTopic = {
    topic: "Statistics III",
    topicId: "I00003",
    category: "Mathematics",
    rating: 4
}

export const testAvail1: ScheduleAvailability ={
    day: 'Monday',
    time: 13
}

export const testAvail2: ScheduleAvailability ={
    day: 'Monday',
    time: 14
}

export const testAvail3: ScheduleAvailability ={
    day: 'Monday',
    time: 15
}

export const testAvail4: ScheduleAvailability ={
    day: 'Tuesday',
    time: 13
}

export const testAvail5: ScheduleAvailability ={
    day: 'Saturday',
    time: 10
}

export const testLesson1: ScheduleBlock = {
    id: 'L00001',
    day: '2025-12-15',
    time: 13,
    studentId: 'S00001',
    tutorId: 'T00001',
    status: 'scheduled',
    topicId: "I00001"
}

export const testStudentAward: StudentAward = {
    topic: 'I00003',
    type: 'Most improved'
}

export const testStudent1: StudentProps = {
    nameFirst: 'Paul',
    nameLast: 'Dirac',
    studentId: 'S00001',
    subjects: [alg2testTopic, calc1testTopic, stat3testTopic],
    availability: [testAvail1,testAvail2,testAvail3],
    scheduledLessons: [testLesson1],
    awards: [testStudentAward]
}

export const testTutor1: TutorProps = {
    nameFirst: "Albert",
    nameLast: "Einstein",
    tutorId: "T00001",
    subjects: [alg2testTopicTutor, calc1testTopicTutor],
    availability: [testAvail1,testAvail4,testAvail5],
    scheduledLessons: [testLesson1]
}

export const testTutor2: TutorProps = {
    nameFirst: "Sofia",
    nameLast: "Kovalevskaya",
    tutorId: "T00002",
    subjects: [stat3testTopicTutor],
    availability: [testAvail2,testAvail3],
    scheduledLessons: []
}

