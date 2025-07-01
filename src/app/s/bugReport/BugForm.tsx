"use client"
import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { BsFileEarmarkImage } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import axios from "axios";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function BugForm() {

  const [file, setFile] = useState<File | null>(null);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // SET INITIALLY DATA 
  const [data, setData] = useState({
    reason: "",
    explain: "",
    priority: "",
    pageUrl: "",
    addInfo: "",
  });


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // CLEAR FORM FUNCTION
  function clearForm() {
    setData({ // set data initial state
      reason: "",
      explain: "",
      priority: "",
      pageUrl: "",
      addInfo: "",
    })
    setFile(null);
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  // HANDLE FILE UPLOADING
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
    }
  };


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // SET DATA WHEN INPUT
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data);
  };


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // SET DATA WHEN CLICK ON REASON TOGGLE BUTTON 
  const onReasonToggleHandler = (reason: string) => {
    setData(data => ({ ...data, reason: reason }));
  };



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // SET DATA WHEN CLICK ON PRIORITY TOGGLE BUTTON 
  const onPriorityToggleHandler = (priority: string) => {
    setData(data => ({ ...data, priority: priority }));
  };



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // POST BUG REPORT DATA WHEN FORM SUBMIT
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    console.log(data);

    const formData = new FormData(); // Store all Data in formData
    formData.append('reason', data.reason);
    formData.append('explain', data.explain);
    formData.append('priority', data.priority);
    formData.append('pageUrl', data.pageUrl);
    formData.append('addInfo', data.addInfo);
    if (file) {
      formData.append('file', file);
    }


    const response = await axios.post('/api/bugReport', formData); // Post the data

    if (response.data.success) {
      alert('Success')


      location.reload();
      setFile(null);

      setData({
        reason: "",
        explain: "",
        priority: "",
        pageUrl: "",
        addInfo: "",
      })

    } else {
      alert('Error! Please fill all details Correctly \nSupported file type: JPEG, JPG, PNG, PDF, MP4, WebM, or Ogg file.')
    }
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <>
      <section id="bugForm" className="w-full max-w-7xl mx-auto py-32 my-10">
        <h4 className="text-5xl font-semibold">Bug Report Form</h4>

        <div className="mt-28">
          <h6 className="text-lg font-medium">Reason for reporting the bug?</h6>

          <div className="my-8">
            <ToggleGroup type="single">
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Functionality Issue')}
                value="Functionality Issue"
                aria-label="Toggle Functionality Issue"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Functionality Issue</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Visual/Aesthetic')}
                value="Visual/Aesthetic"
                aria-label="Toggle Visual/Aesthetic"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Visual/Aesthetic</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Performance Issue')}
                value="Performance Issue"
                aria-label="Toggle Performance Issue"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Performance Issue</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Security Issue')}
                value="Security Issue"
                aria-label="Toggle Security Issue"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Security Issue</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Data/Content issue')}
                value="Data/Content issue"
                aria-label="Toggle Data/Content issue"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Data/Content issue</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Crash/Error Issue')}
                value="Crash/Error Issue"
                aria-label="Toggle Crash/Error Issue"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Crash/Error Issue</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Localization/Internationalization Issue')}
                value="Localization/Internationalization Issue"
                aria-label="Toggle Localization/Internationalization Issue"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Localization/Internationalization Issue</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Usability/UX Issue')}
                value="Usability/UX Issue"
                aria-label="Toggle Usability/UX Issue"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Usability/UX Issue</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="reason"
                onClick={() => onReasonToggleHandler('Other')}
                value="Other"
                aria-label="Toggle Other"
                className="flex-shrink-0 bg-gray-200 rounded-full px-10 py-4 h-auto font-medium"
              >
                <span>Other</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

        </div>
        <div className="my-16">
          <h6 className="text-xl font-medium">
            Can you provide clarity on the issue? Help us understand
          </h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Provide a detailed description of the bug including steps to
            reproduce it, expected behavior, and actual behavior. Include any
            relevant information or observations
          </p>
          <Textarea
            name='explain'
            onChange={onChangeHandler}
            value={data.explain}
            placeholder="Type your observations here."
            className="h-40 mt-8 px-5 py-4 font-medium text-base border-[3px] border-gray-500 outline-none focus:outline-none focus:border-[3px] focus:ring-0"
          />
        </div>
        <div className="my-16">
          <h6 className="text-xl font-medium">Bug priority</h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Choose the priority level of the bug. Priority indicates the urgency
            and impact of the bug on users or system functionality.
          </p>

          <div className="my-8">
            <ToggleGroup type="single">
              <ToggleGroupItem
                name="priority"
                onClick={() => onPriorityToggleHandler('Basic')}
                value="Basic"
                aria-label="Toggle Basic"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>Basic</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="priority"
                onClick={() => onPriorityToggleHandler('Update')}
                value="Update"
                aria-label="Toggle Update"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>Update</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="priority"
                onClick={() => onPriorityToggleHandler('Low Priority')}
                value="Low Priority"
                aria-label="Toggle Low Priority"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>Low Priority</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="priority"
                onClick={() => onPriorityToggleHandler('Medium Priority')}
                value="Medium Priority"
                aria-label="Toggle Medium Priority"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>Medium Priority</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                name="priority"
                onClick={() => onPriorityToggleHandler('High Priority')}
                value="High Priority"
                aria-label="Toggle High Priority"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>High Priority</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

        </div>
        <div className="my-16">
          <h6 className="text-xl font-medium">Page URL</h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Include the URL of the page where the bug appears, this can be
            helpful in resolving the bug faster
          </p>
          <Input
            name='pageUrl'
            onChange={onChangeHandler}
            value={data.pageUrl}
            placeholder="Bugs appeared page URL"
            type="url"
            className="h-14 w-1/2 mt-8 px-5 py-4 rounded-xl font-medium text-base border-[3px] border-gray-500 outline-none focus:outline-none focus:border-[3px] focus:ring-0"
          />
        </div>
        <div className="my-16">
          <h6 className="text-xl font-medium">Attach files</h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Attach screenshots, screen recordings, or any other relevant files
            that illustrate the bug. Visual aids can help developers understand
            the issue more effectively.
          </p>
          <div className="mt-8 w-96 relative flex items-center cursor-pointer">
            <Input
              id="file"
              name="file"
              type="file"
              onChange={handleFileUpload}
              className="flex-shrink-0 bg-gray-200 border-gray-400 border-2 rounded-full px-10 py-4 h-auto font-medium text-red-500 cursor-pointer pl-12"
            />
            <BsFileEarmarkImage className="absolute left-5 text-2xl pointer-events-none" />
          </div>
        </div>
        <div className="my-16">
          <h6 className="text-xl font-medium">Additional information</h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Include any additional information that might be helpful in
            resolving the bug, such as error logs, console outputs, or relevant
            URLS
          </p>
          <Textarea
            name='addInfo'
            onChange={onChangeHandler}
            value={data.addInfo}
            placeholder="Error logs, console outputs, relevant
            URLS"
            className="h-40 mt-8 px-5 py-4 font-medium text-base border-[3px] border-gray-500 outline-none focus:outline-none focus:border-[3px] focus:ring-0"
          />
        </div>

        <div className="flex justify-between gap-10 mt-28">
          <Button
            variant={"outline"}
            onClick={clearForm}
            title="Clear the bug report form"
            className="min-w-40 px-16 py-3 font-semibold rounded-xl h-auto hover:bg-black hover:text-white border-[3px] border-black hover:border-black duration-500"
          >
            Cancel
          </Button>
          <Button
            variant={"default"}
            onClick={onSubmitHandler}
            className="min-w-40 px-16 py-3 font-semibold rounded-full h-auto hover:bg-black bg-[#FD500A] duration-500 shadow-xl hover:shadow-lg"
          >
            Submit your Report
          </Button>
        </div>
      </section>
    </>
  );
}

export default BugForm;
