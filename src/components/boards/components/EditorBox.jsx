import {Editor} from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import {useRef} from "react";
import * as images from "../../../apis/images";

function EditorBox({setContent, addFileNames, setIsLoading}) {
    const editorRef = useRef();

    const onChange = () => {
        setContent(editorRef.current.getInstance().getHTML());
    };

    const onUploadImage = async (blob, callback) => {
        try {
            setIsLoading(true);
            const data = await images.uploadImage(blob);
            addFileNames(data.fileName);
            callback(data.url, 'alt text');
            return false;
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="edit_wrap">
                <Editor
                    initialValue=" "
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                    hideModeSwitch={true}
                    useCommandShortcut={false}
                    language="ko-KR"
                    ref={editorRef}
                    plugins={[colorSyntax]}
                    onChange={onChange}
                    hooks={{
                        addImageBlobHook: onUploadImage
                    }}

                />
            </div>
        </>
    );
}

export default EditorBox;