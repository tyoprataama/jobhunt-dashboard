import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(process.env.SUPABASE_PUBLIC_URL!!, process.env.SUPABASE_PUBLIC_KEY!!)

const generateId = (length:number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// docs: https://supabase.com/docs/reference/javascript/storage-from-move
export const supabaseUploadFile =  async (file:File | string, bucket: 'Company' | 'Applicants') => {
const filename = `${generateId(7)}.jpg`
const { data, error } = await supabaseClient
  .storage
  .from(bucket)
  .upload('public' + filename, file, {
    cacheControl: '3600',
    upsert: false
  })
  return{
    data,
    error,
    filename
  }
}
export const supabaseUpdateFile = async (filename:string, file:File | string, bucket: 'Company' | 'Applicants') => {

const { data, error } = await supabaseClient
  .storage
  .from(bucket)
  .update('public' + filename, file, {
    cacheControl: '3600',
    upsert: true
  })
  return {
    data,
    error
  }
}
export const supabaseDeleteFile = async(filename:string,  bucket: 'Company' | 'Applicants') => {

const { data, error } = await supabaseClient
  .storage
  .from(bucket)
  .remove(['folder' + filename])

  return{
    data,
    error
  }
}
export const supabaseRetrieveURL = (filename:string | string, bucket: 'Company' | 'Applicants') => {


const { data } = supabaseClient
  .storage
  .from(bucket)
  .getPublicUrl('folder/' + filename)

  return {
    publicUrl: data.publicUrl
  }
}