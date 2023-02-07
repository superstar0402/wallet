import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import "./style.css";

type Option = {
  label: string;
  value: any;
};

type Group = {
  name: string;
  options: Option[];
};

const data: Group[] = [
  {
    name: "account",
    options: [
      {
        label: "request",
        value: {
          method: "account.request",
          params: {
            currencyIds: ["ethereum", "bitcoin"],
          },
        },
      },
      {
        label: "receive",
        value: {
          method: "account.receive",
          params: {
            accountId: "",
          },
        },
      },
      {
        label: "list",
        value: {
          method: "account.list",
          params: {
            currencyIds: ["ethereum", "bitcoin"],
          },
        },
      },
    ],
  },
  {
    name: "currency",
    options: [
      {
        label: "list",
        value: {
          method: "currency.list",
          params: {},
        },
      },
    ],
  },
  {
    name: "message",
    options: [
      {
        label: "sign",
        value: {
          method: "message.sign",
          params: {
            accountId: "",
            hexMessage: "",
          },
        },
      },
    ],
  },
  {
    name: "transaction",
    options: [
      {
        label: "sign",
        value: {
          method: "transaction.sign",
          params: {
            accountId: "",
            rawTransaction: {
              amount: "",
              recipient: "",
            },
            options: {},
          },
        },
      },
      {
        label: "signAndBroadcast",
        value: {
          method: "transaction.signAndBroadcast",
          params: {
            accountId: "",
            rawTransaction: {
              amount: "",
              recipient: "",
            },
            options: {},
          },
        },
      },
    ],
  },
];

type TemplateSelectorProps = {
  onSelectTemplate: (value: string) => void;
};

export function TemplateSelector({ onSelectTemplate }: TemplateSelectorProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Customise options"
          className="py-2.5 px-5 text-sm mr-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Template
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {data.map((group) => (
            <DropdownMenu.Sub key={group.name}>
              <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                {group.name}
                <div className="RightSlot">
                  <ChevronRightIcon />
                </div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="DropdownMenuSubContent"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  {group.options.map((option) => {
                    const methodName = `${group.name}.${option.label}`;
                    return (
                      <DropdownMenu.Item
                        key={methodName}
                        className="DropdownMenuItem"
                        onSelect={() => {
                          onSelectTemplate(option.value);
                        }}
                      >
                        {methodName}
                      </DropdownMenu.Item>
                    );
                  })}
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          ))}
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
