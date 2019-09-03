json.extract! guest, :name, :age, :favorite_color
json.set! :gifts, guest.gifts do |gift|
  json.extract! gift, :title, :description
end
