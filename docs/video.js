// - Config -

// List of all available videos (e.g. '['video1.mp4', 'video2.ogg', 'video3.mov']')
const items = ['a.mp4', 'b.mp4', 'c.mp4']

// Folder path (e.g. 'videos' or 'folder1/folder2')
const folder = 'videos'

// Redirects to video (Autoplay with sound & video-controls, but will not loop & fit to viewport)
// Settings below this one will be ignored if set to true
const redirect = false

// Enable autoplay (Will mute the video on playback)
const autoplay = false

// Display video-controls (e.g. playhead, volume-slider, etc.)
const controls = true

// Loops the video
const loop = true



// - Program -

// Set variables
var attributes = ""
var file = items[Math.floor(Math.random() * items.length)]
var path = folder + "/" + file

// Apply settings
if (autoplay) { attributes += " autoplay muted" }
if (controls) { attributes += " controls" }
if (loop) { attributes += " loop" }

// Execute
if (redirect) {
	// Redirect
	window.location.replace(path);
} else {
	// Write video
	document.write('<video' + attributes + '><source src="' + path + '">Your browser does not support the video tag.</video>')
}