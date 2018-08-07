import data from './data.js';

let channels = data.channels;

if(!channels) {
    data.channels = createChannels();
    channels = data.channels;
}

function createChannels() {
    return [{
        name: 'Main Room',
        video: 'videos/mainroom.MOV',
        count: 0
    }, {
        name: 'Classroom',
        video: 'videos/classroom.MOV',
        count: 0
    }, {
        name: 'Hallway',
        video: 'videos/hallway.MOV',
        count: 0
    }];
}

export default {
    get: function() {
        return channels;
    }
};