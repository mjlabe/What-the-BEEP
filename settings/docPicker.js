import DocumentPicker from 'react-native-document-picker';

export default function AudioPicker() {
// Pick a single file
    try {
        const res = DocumentPicker.pick({
            type: [DocumentPicker.types.audio],
        });
        console.log(
            res.uri,
            res.type, // mime type
            res.name,
            res.size
        );
    } catch (err) {
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else {
            throw err;
        }
    }
}
