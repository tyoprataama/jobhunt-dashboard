import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import React, { FC, ReactNode, useEffect, useRef } from "react";

interface indexProps {
  form: any;
  name: any;
  editorLoaded?: boolean;
}
const CKEditor: FC<indexProps> = (props) => {
  const { form, name, editorLoaded } = props;
  const editorRef = useRef<any>();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    }
  }, []);
  return (
    <>
      {editorLoaded ? (
        <div>
          <CKEditor
            editor={ClassicEditor}
            data={form.getValues(name)}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              form.setValue(name, data);
            }}
          />
          <FormField control={form.control} name={name} render={({field}) => (
            <FormItem>
              <FormMessage className="mt-3" />
            </FormItem>
          )} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CKEditor;
