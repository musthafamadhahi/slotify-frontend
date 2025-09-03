import { useState } from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function TimePicker({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value?: string;
  onChange: (val: string) => void;
}) {
  const [hour, setHour] = useState<string>(value?.split(':')[0] || '10');
  const [minute, setMinute] = useState<string>(value?.split(':')[1] || '00');

  const handleChange = (newHour: string, newMinute: string) => {
    const newVal = `${newHour.padStart(2, '0')}:${newMinute}`;
    onChange(newVal);
  };

  return (
    <div className="space-y-3">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex gap-1">
        {/* Hours */}
        <Select
          value={hour}
          onValueChange={(val) => {
            setHour(val);
            handleChange(val, minute);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="HH" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 24 }).map((_, i) => (
              <SelectItem key={i} value={String(i).padStart(2, '0')}>
                {String(i).padStart(2, '0')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Minutes (00, 30 only) */}
        <Select
          value={minute}
          onValueChange={(val) => {
            setMinute(val);
            handleChange(hour, val);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="MM" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="00">00</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
