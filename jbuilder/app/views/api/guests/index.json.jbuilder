json.array! @guests.where("age between 40 and 50") do |guest| 
  json.extract! guest, :name
end