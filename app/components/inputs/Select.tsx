"use client";

import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  disabled
}) => {
  return (
    <div className="z-[100]">
      <label
        className="
          block
          text-sm
          font-medium
          leading-6
          text-gray-900
          dark:text-gray-100
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect 
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          // menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
                ...base,
                zIndex: 9999,
            }),

          }}
          className="my-react-select-container"
          classNamePrefix="my-react-select"
          // classNames={{
          //   control: () => "dark:!bg-gray-800 dark:!border-gray-300 text-sm",
          //   menuPortal: () => "dark:!bg-gray-800 dark:!border-gray-300 weirdshit",
          //   menuList: () => "dark:!bg-gray-800 dark:!border-gray-300 dark:!text-gray-100",
          //   option: () => "dark:hover:!bg-gray-500 dark:focus:!bg-gray-500 dark:active:!bg-gray-500"
          // }}
        />
      </div>
      
    </div>
  )
}

export default Select;