"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { BsFileEarmarkImage } from "react-icons/bs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function AgainstCandidate() {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <h3 className="text-[9rem] font-bold leading-[9rem]">
        <span className="text-gray-300 text-9xl">Against</span> <br />
        Candidate<span className="text-[#FC4C03]">:</span>
      </h3>

      <div className="space-y-12 mt-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="space-y-4 col-span-5">
            <label htmlFor="complainerName" className="text-base font-medium">
              User’s Name
            </label>
            <Input
              type="text"
              id="complainerName"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize"
              placeholder="User’s name"
              spellCheck="false"
              autoComplete="name"
            />
          </div>
          <div className="space-y-4 col-span-4">
            <label htmlFor="complainerEmail" className="text-base font-medium">
              User’s Email
            </label>
            <Input
              type="email"
              id="complainerEmail"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium lowercase placeholder:capitalize"
              placeholder="User’s Email"
              spellCheck="false"
              autoComplete="email"
            />
          </div>
          <div className="space-y-4 col-span-3">
            <label htmlFor="complainerNumber" className="text-base font-medium">
              User’s Number
            </label>
            <Input
              type="tel"
              id="complainerNumber"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize"
              placeholder="User’s Number"
              spellCheck="false"
              autoComplete="tel"
              maxLength={10}
              minLength={10}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10">
          <div className="space-y-4 col-span-5">
            <label htmlFor="candidateName" className="text-base font-medium">
              Candidate’s Name
            </label>
            <Input
              type="text"
              id="candidateName"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize"
              placeholder="Candidate’s name"
              spellCheck="false"
            />
          </div>
          <div className="space-y-4 col-span-4">
            <label htmlFor="candidateEmail" className="text-base font-medium">
              Candidate’s Email (Optional)
            </label>
            <Input
              type="email"
              id="candidateEmail"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium lowercase placeholder:capitalize"
              placeholder="Candidate’s Email (Optional)"
              spellCheck="false"
            />
          </div>
          <div className="space-y-4 col-span-3">
            <label htmlFor="candidateNumber" className="text-base font-medium">
              Candidate’s Number (Optional)
            </label>
            <Input
              type="tel"
              id="candidateNumber"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize"
              placeholder="Phone Number (Optional)"
              spellCheck="false"
              maxLength={10}
              minLength={10}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10">
          <div className="space-y-4 col-span-7">
            <label
              htmlFor="candidateProfileLink"
              className="text-base font-medium"
            >
              Candidate Profile Link
            </label>
            <Input
              type="url"
              id="candidateProfileLink"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize"
              placeholder="Candidate Profile Link"
              spellCheck="false"
            />
          </div>
          <div className="space-y-4 col-span-5">
            <label htmlFor="jobApplicationId" className="text-base font-medium">
              Job Application ID (Optional)
            </label>
            <Input
              type="tel"
              id="jobApplicationId"
              className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize"
              placeholder="Job Application ID (Optional)"
              spellCheck="false"
            />
          </div>
        </div>
        <div className="pt-6">
          <h6 className="text-xl font-medium">
            Can you provide Detailed description of the complaint? Help us
            understand
          </h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Please provide a detailed description of the complaint, including
            all positive and negative reviews of the candidate. This information
            will be very helpful for us to understand the actual problem.
          </p>
          <Textarea
            placeholder="Type Detailed description of the complaint"
            className="h-40 mt-8 px-5 py-4 font-medium text-base border-[3px] border-gray-500 outline-none focus:outline-none focus:border-[3px] focus:ring-0"
          />
        </div>
        <div className="pt-6">
          <h6 className="text-xl font-medium">Attach files (Optional)</h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Attach screenshots, screen recordings or any other relevant files
            that can be used as evidence. Visual aids can help our team
            understand the issue more effectively.
          </p>
          <div className="mt-8 w-96 relative flex items-center cursor-pointer">
            <Input
              id="picture"
              type="file"
              className="flex-shrink-0 bg-gray-200 border-gray-400 border-2 rounded-full px-10 py-4 h-auto font-medium text-red-500 cursor-pointer pl-12"
            />
            <BsFileEarmarkImage className="absolute left-5 text-2xl pointer-events-none" />
          </div>
        </div>
        <div className="pt-6">
          <h6 className="text-xl font-medium">Complain priority</h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Choose the priority level of the bug. Priority indicates the urgency
            and impact of the bug on users or system functionality.
          </p>
          <div className="mt-6">
            <ToggleGroup type="single">
              <ToggleGroupItem
                value="Low Priority"
                aria-label="Toggle Low Priority"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>Low Priority</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="Medium Priority"
                aria-label="Toggle Medium Priority"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>Medium Priority</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="High Priority"
                aria-label="Toggle High Priority"
                className="flex-shrink-0 bg-transparent border-2 border-[#FD500A] rounded-full px-14 py-3.5 h-auto font-medium"
              >
                <span>High Priority</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10 pt-6">
          <div className="space-y-4 col-span-5">
            <label htmlFor="dateOfIncident" className="text-base font-medium">
              Date of Incident
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick Incident Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-4 col-span-4">
            <label
              htmlFor="requestForFollowUp"
              className="text-base font-medium"
            >
              Request for Follow-Up
            </label>
            <Select>
              <SelectTrigger className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize">
                <SelectValue
                  placeholder="Request for Follow-Up"
                  id="requestForFollowUp"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4 col-span-3">
            <label
              htmlFor="anonymousComplaints"
              className="text-base font-medium"
            >
              Anonymous Complaints
            </label>
            <Select>
              <SelectTrigger className="w-full rounded-xl border-2 border-black h-16 text-base px-10 font-medium capitalize placeholder:capitalize">
                <SelectValue
                  placeholder="Anonymous Complaints"
                  id="anonymousComplaints"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="pt-6">
          <h6 className="text-xl font-medium">
            Additional information (Optional)
          </h6>
          <p className="text-base font-medium mt-2 text-gray-500">
            Include any additional Additional comments or suggestions that might
            be helpful in resolving the complaint.
          </p>
          <Textarea
            placeholder="Type your comments or suggestions (Optional)"
            className="h-40 mt-8 px-5 py-4 font-medium text-base border-[3px] border-gray-500 outline-none focus:outline-none focus:border-[3px] focus:ring-0"
          />
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-28">
        <Button
          variant={"outline"}
          title="Clear the bug report form"
          className="min-w-40 px-16 py-3 font-semibold rounded-xl h-auto hover:bg-black hover:text-white border-[3px] border-black hover:border-black duration-500"
        >
          Cancel
        </Button>
        <Button
          variant={"default"}
          className="min-w-40 px-16 py-3 font-semibold rounded-full h-auto hover:bg-black bg-[#FD500A] duration-500 shadow-xl hover:shadow-lg"
        >
          Submit your Complaint
        </Button>
      </div>
    </>
  );
}

export default AgainstCandidate;
